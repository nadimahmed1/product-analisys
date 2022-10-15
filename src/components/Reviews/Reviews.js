import React from 'react';
import useUsers from '../../hooks/users';
import Home from '../Home/Home';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [users, setUsers] = useUsers();
    return (
        <div className='users-container'>

            {
                users.map(user => <Review
                    key={user.id}
                    user={user}
                ></Review>

                )
            }
        </div>
    );
};

export default Reviews;