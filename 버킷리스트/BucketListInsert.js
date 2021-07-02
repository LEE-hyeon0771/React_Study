import React, { useCallback, useState } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import './BucketListInsert.scss';

//<새로운 항목 추가>
const BucketListInsert = ({ onInsert }) => {
  const [value, setvalue] = useState('');
  const onChange = useCallback((e) => {
    //onChange로 value에 값이 들어가도록 정의
    setvalue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      //props로 받아온 onInsert함수에 value를 넣고 호출
      onInsert(value);
      setvalue(''); //현재 value초기화
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    //추가로 적을 수 있는 창 구현
    <form className="BuckeListInsert" onSubmit={onSubmit}>
      <input
        placeholder="당신의 더 하고 싶은 꿈은?"
        value={value}
        onChange={onChange}
      />
      <button type="submit" onSubmit={onSubmit}>
        <AiOutlineExclamationCircle />
      </button>
    </form>
  ); //button을 눌렀을 때 동작하도록 onSubmit 함수 형성
}; //

export default BucketListInsert;
