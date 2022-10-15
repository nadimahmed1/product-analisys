import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, id, img, ratings, comment } = props.user
    return (
        <div className='review-user whitespace-normal'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-detail'>
                <h1 className='font-bold'> {name}</h1>
                <p className='border p-2'><small>{comment}</small></p>

            </div>
            <div>
                <p>ratings: {ratings}</p>
            </div>

        </div>
    );
};

export default Review;