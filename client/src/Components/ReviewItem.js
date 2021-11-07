import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = props => {
  console.log(props.review.reviewScore);
  const stars = [];
  for(let i = 0; i < props.review.reviewScore; i++)
  {
    stars.push(<FontAwesomeIcon key={`review[${i}]`} icon={faStar} />);
  }

  return (
    <div>
      {/* <div className="card text-center">
        <div className="card-header">
          <h3>{props.review.songName}</h3>
          <h4>{props.review.artistName}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{props.review.reviewText}</p>
          <p className="card-text">{props.review.reviewScore}</p>
        </div>
      </div>
      <br /> */}
      <div className="card border-dark">
        <div className="card-header border-0" style={{paddingBottom: "0px"}}>
          <h5 className="card-title text-center"><span>{props.review.songName}</span> - <span>{props.review.artistName}</span></h5>
          <h6 className="card-title border-dark border-bottom text-center" style={{ paddingBottom: "6px", marginBottom: "0px"}}>{props.review.reviewGenre}</h6>
        </div>
        <div className="row card-body">
          <div className="col-12">
            <p className="card-text">{props.review.reviewText}</p>
            <br />
            {stars}
          </div>
        </div>
      </div>
      <br />
    </div>
  )
};

export default ReviewItem;
