import React from 'react';
import BucketListInfo from './BucketListInfo';
import './BucketList.scss';

// buckets 배열을 props로 받아서 map을 이용해 bucketListInfo로 랜더링
const BucketList = ({ buckets, onRemove, onToggle }) => {
  return (
    <div className="BucketList">
      {buckets.map((bucket) => (
        <BucketListInfo
          bucket={bucket}
          key={bucket.num}
          onRemove={onRemove}
          onToggle={onToggle}
        /> //bucketList의 데이터를 props
        //map사용시 key props전달 num을 key가 받아줌:map이므로
        //배열로 나타내어져야하므로 App.js에서 요소들을 []로 묶어줌
      ))}
    </div>
  );
};

export default BucketList;
