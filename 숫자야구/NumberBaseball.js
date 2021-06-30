import React, { Component } from "react";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i = i + 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      //정답일때 1234형식 출력
      this.setState({
        result: "홈런",
        tries: [...this.state.tries, { try: this.state.value, result: "홈런" }],
      });
      alert("게임을 다시 시작합니다!");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      //정답이 아닐때
      const answerArray = this.state.value.split("").map((v) => parseInt(v));
      //value => 1234, answerArray = [1,2,3,4]
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        //10번 다 틀렸을때
        this.setState({
          result: `10번 넘게 틀려서 실패!
            답은 ${this.state.answer.join(",")}였습니다.`,
        });
        alert("게임을 다시 시작합니다!");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        //실패하고, 스트라이크와 볼 수를 알려줄 때
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            { try: this.state.value, result: `${strike}스트라이크,${ball}볼` },
          ],
        });
      }
    }
  };
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>

        <form onSubmit={this.onSubmit}>
          <input
            maxLenth={4}
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>

        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v) => {
            return (
              <li>
                <div>{v.try}</div>
                <div>{v.result}</div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
