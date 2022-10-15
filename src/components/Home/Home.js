import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/users';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useUsers();
    return (
        <div>
            <div className="headline">
                <div className="text-container">
                    <h1 className='text-5xl font-bold  p-5 text-green-600'>Your Next Shoes</h1>
                    <h2 className='text-5xl font-bold  p-5 text-teal-600'>Your Best Shoes</h2>

                    <br />
                    <p className='p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aspernatur libero nulla commodi consequatur officia dolorum fugiat deserunt. Alias excepturi repellat cum at doloremque labore temporibus. Atque, magni. Deleniti nam doloremque eligendi quis, aperiam, quos, beatae tempora dolor ea expedita exercitationem corporis dignissimos. Nemo minus iusto architecto obcaecati temporibus ea.</p>
                </div>
                <div className="image-container">

                    <img className='p-5 ' src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl'>Customer Reviews(3)</h1>
                </div>
                <br />
                <br />
                <div className='m-20'>
                    <Link to={'/reviews'} className='review-btn p-2 bg-black text-white rounded-md'>See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;