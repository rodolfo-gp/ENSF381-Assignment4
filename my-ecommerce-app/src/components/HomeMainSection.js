import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews';

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
            <p> 1. Expert Product Knowledge: At Laflamme company, we pride ourselves on our deep understanding of Home essential equipment. Our team consists of knowledgeable experts who are passionate about cameras and accessories. Whether you're a professional photographer or a hobbyist, we're here to provide you with expert guidance and recommendations tailored to your needs.</p>
            <p> 2. Exceptional Customer Service: Providing outstanding customer service is our top priority. From the moment you visit our website to the delivery of your order, we strive to ensure that your experience with Laflamme company is seamless and enjoyable. Our dedicated support team is available to assist you with any inquiries or concerns, ensuring that you receive the assistance you need promptly and efficiently.</p>
            <p> 3. Commitment to Innovation: At Laflamme company, we're committed to staying at the forefront of the essentials industry. We continuously research and evaluate the latest advancements in technology and equipment to ensure that we offer our customers the most innovative and cutting-edge products available. Whether it's the latest camera model or groundbreaking accessories, you can trust Laflamme company to provide you with the tools you need to unleash your creativity and capture stunning images.</p>

        
            <button onClick={() => { /* Handle click event to navigate to ProductPage */ }}>
                Shop Now
            </button>

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
};

export default HomeMainSection;