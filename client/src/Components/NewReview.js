import React, { useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import ReviewService from '../Services/ReviewService';
import { AuthContext } from '../Context/AuthContext';
import Message from './Message';

const Reviews = prop => {
  const [review, setReview] = useState({ songName: '', artistName : '', reviewGenre : '', reviewText : '', reviewScore : '' });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  let history = useHistory();

  const onSubmit = event => {
    event.preventDefault();
    console.log(review);
    ReviewService.postReview(review).then(data => {
      const { message } = data;
      resetForm();
      if (message.msgBody === 'Unauthorized') {
        setMessage(message);
        authContext.setUser({ username: '', role: '' });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
      setTimeout(() => {
        if(!message === "A Database Error has Occured"){
          history.push('/');
        }
      }, 5000);
    });
  };

  const onChange = event => {
    const {name, value} = event.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const resetForm = () => {
    setReview({ songName: '', artistName : '', reviewGenre : '', reviewText : '', reviewScore : '' });
  };

  return (
    <div className="form-group container">
      <div className ="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 card" style={{marginTop: "1em"}}>
          <br />
          <h2 className="mb-4 mt-0 text-center">Enter your review.</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group row">
              <label htmlFor="songName" className="col-sm-3 col-form-label" >Song Name</label>
              <div className="col-sm-9">
                <input type="text" name="songName" value={review.songName} onChange={onChange} className="form-control" placeholder="Enter the song name." />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="artistName" className="col-sm col-form-label" >Artist Name</label>
              <div className="col-sm-9">
                <input type="text" name="artistName" value={review.artistName} onChange={onChange} className="form-control" placeholder="Please Enter Artist Name" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="reviewGenre" className="col-sm col-form-label" >Genre</label>
              <div className="col-sm-9">
                <select name="reviewGenre" className="form-control" value={review.reviewGenre} onChange={onChange}>
                  <option defaultValue hidden>Select a Genre</option>
                  <option value="Alternative">Alternative</option>
                  <option value="Blues">Blues</option>
                  <option value="Classical">Classical</option>
                  <option value="Country">Country</option>
                  <option value="Dance">Dance</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Hip-Hop">Hip-Hop</option>
                  <option value="Rap">Rap</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Latin">Latin</option>
                  <option value="Pop">Pop</option>
                  <option value="R&B">R&B</option>
                  <option value="Soul">Soul</option>
                  <option value="Rock">Rock</option>
                  <option value="Metal">Metal</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="reviewText" className="col-sm col-form-label" >Review</label>
              <div className="col-sm-9">
                <textarea type="text" name="reviewText" value={review.reviewText} onChange={onChange} className="form-control" placeholder="Please Enter Review" style={{minHeight: "5em"}}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="reviewGenre" className="col-sm col-form-label" >Score</label>
              <div className="col-sm-9">
                <select name="reviewScore" className="form-control" value={review.reviewScore} onChange={onChange}>
                  <option defaultValue hidden>Select a Score</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
            </div>
            <br />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </form>
          <br />
        </div>
        <div className="col-md-2"></div>

        
      </div>
      <br />
      
        {/* <h2 className="mb-4 mt-0 text-center">Enter your review.</h2>
        <input placeholder="Enter Song Name" type="text" className="form-control" name="songName" value={review.songName} onChange={onChange} required />
        <input type="text" name="artistName" placeholder="Enter Artist Here" value={review.artistName} onChange={onChange} required />
        <select value={review.reviewGenre} onChange={onChange}>
            <option value="none" selected disabled hidden>Select a Genre</option>
            <option value="Alternative">Alternative</option>
            <option value="Blues">Blues</option>
            <option value="Classical">Classical</option>
            <option value="Country">Country</option>
            <option value="Dance">Dance</option>
            <option value="Electronic">Electronic</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="Rap">Rap</option>
            <option value="Jazz">Jazz</option>
            <option value="Latin">Latin</option>
            <option value="Pop">Pop</option>
            <option value="R&B">R&B</option>
            <option value="Soul">Soul</option>
            <option value="Rock">Rock</option>
            <option value="Metal">Metal</option>
        </select>
        <input type="text" id="body" placeholder="Enter Review Here" required />
        <select id="rating">
            <option value="none" selected disabled hidden>Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button> */}

      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Reviews;