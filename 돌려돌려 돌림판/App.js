import React from "react";
import "./App.css";
//import Navbar from "./components/Navbar";
import Background from "../src/assets/background.jpg";
class App extends React.Component {
  state = {
    name: "circle",
  };
  startRotation = () => {
    this.setState({
      name: "circle start-rotate",
    });
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate stop-rotate",
      });
    }, Math.floor(Math.random() * 10000) + 1);
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "700px",
        }}
      >
        <div className="app-title">결정장애를 위한 돌려돌려 돌림판</div>
        <div className="arrow"></div>

        <ul className={this.state.name}>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              1
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              2
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              3
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              4
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              5
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              6
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              7
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              8
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              9
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              10
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              11
            </div>
          </li>
          <li>
            <div className="text" contenteditable="true" spellcheck="false">
              12
            </div>
          </li>
        </ul>

        <button className="spin-button" onClick={this.startRotation}>
          SPIN
        </button>
      </div>
    );
  }
}

export default App;
