import React from 'react';

const ReviewItem = props => {
  return(
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h3>{props.review.songName}</h3>
          <h4>{props.review.artistName}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{props.review.reviewText}</p>
          <p className="card-text">{props.review.reviewScore}</p>
        </div>
      </div>
      <br />
    </div>
  )
};  

export default ReviewItem;
