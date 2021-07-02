import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import { CgRadioCheck } from 'react-icons/cg';
import cn from 'classnames';
import './BucketListInfo.scss';

//<버킷리스트에 대한 정보를 보여줌>
const BucketListInfo = ({ bucket, onRemove, onToggle }) => {
  const { num, text, checked } = bucket; //bucket에 App.js의 num, text, checked 지정
  const onClick = () => {
    //Click시 지워지는 요소 추가 - remove기능 활성화
    onRemove(num);
  };

  return (
    <div
      className="BucketListInfo" //className을 BucketListInfo로 지정
    >
      <div
        className={cn('checkBox', { checked })}
        onClick={() => onToggle(num)} // Toglle로 나타내어서 onClick해도 remove요소 무시
      >
        {
          checked ? <BsCheckCircle /> : <CgRadioCheck />
          //checkBox구현하기 - 꾸밈요소 react-icon에서 구함
        }
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={onClick} //onClick하면 제거 되도록 함.
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default BucketListInfo;
