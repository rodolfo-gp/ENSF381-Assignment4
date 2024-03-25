import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews';
import { Link } from 'react-router-dom';

const HomeMainSection = () => {
    const [randomReviews, setRandomReviews] = useState([]);

    useEffect(() => {
        const getRandomReviews = () => {
            const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
            const selectedReviews = shuffledReviews.slice(0, 2);
            return selectedReviews;
        };

        setRandomReviews(getRandomReviews());
    }, []);

    return (
        <div>
            <h2>About Us</h2>
            {/* Company's mission and vision content */}
            <p>At Laflamme company, we excel in home essentials, providing tailored advice and seamless customer support. Our dedication to innovation ensures we offer cutting-edge products for your creativity and photography needs.</p>
        
           
            <Link to="/products">
                <button>
                    Shop Now
                </button>
            </Link>
            <h2>Customer Reviews</h2>

            {randomReviews.map((review, index) => (
                <div key={index}>
                    <h3>{review.customerName}</h3>
                    <p>{review.reviewContent}</p>
                    <div>
                        {/* Display the rating stars */}
                        {Array.from({ length: review.stars }, (_, i) => (
                            <span key={i}>⭐️</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
