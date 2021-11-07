import React, {useState, useEffect} from 'react';
import ReviewItem from './ReviewItem';
import ReviewService from '../Services/ReviewService';
import GenreList from './GenreList';

const Home = prop => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ReviewService.getReviews().then(data => {
            setReviews(data.reviews);
        });
    }, []);

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-5">
                    <GenreList reviews={reviews} />
                    <br />
                </div>
                <div className="col-md-7">
                    {reviews.map(review => {
                        return <ReviewItem key={review._id} review={review} />
                    })}
                </div>
            </div>
        </div>
    )
};

export default Home;
