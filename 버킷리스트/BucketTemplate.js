import React from 'react';
import './BucketTemplate.scss';
const BucketTemplate = ({ children }) => {
  //children을 객체로 주어 내용을 감싸줌
  return (
    <div className="BucketTemplate">
      <div className="app-title">*버킷리스트*</div>
      <div className="content">
        {
          children //내용이 children의 형태로 App.js에서 템플릿 안에 구현됨
        }
      </div>
    </div>
  );
};

export default BucketTemplate;
