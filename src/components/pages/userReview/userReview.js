import { Grid, Typography, Card, CardContent } from '@mui/material';
import React from 'react';
import Neha from "../../../Assets/Neha.jpg";
import Priya from "../../../Assets/priya.jpg";
import rohan from "../../../Assets/rohan.jpg";
import Carousel from 'react-multi-carousel';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import GradeIcon from '@mui/icons-material/Grade';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { RiDoubleQuotesL } from "react-icons/ri";

import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        review: "Had an absolutely amazing time! The atmosphere was serene, and the staff was incredibly friendly. Can't wait to go back!",
        image: Priya,
        rating: 4.5
    },
    {
        id: 2,
        name: "Rohan Kumar",
        review: "The views were stunning, and the hospitality was top-notch. Highly recommend it to anyone looking for a peaceful getaway.",
        image: rohan,
        rating: 4.0
    },
    {
        id: 3,
        name: "Neha Singh",
        review: "Exceptional customer service and breathtaking views! Couldn't have asked for a better experience. Already planning my next visit!",
        image: Neha,
        rating: 5.0
    },
    {
        id: 4,
        name: "Priya Sharma",
        review: "Had an absolutely amazing time! The atmosphere was serene, and the staff was incredibly friendly. Can't wait to go back!",
        image: Priya,
        rating: 4.5
    },
    {
        id: 5,
        name: "Rohan Kumar",
        review: "The views were stunning, and the hospitality was top-notch. Highly recommend it to anyone looking for a peaceful getaway.",
        image: rohan,
        rating: 4.0
    },
    {
        id: 6,
        name: "Neha Singh",
        review: "Exceptional customer service and breathtaking views! Couldn't have asked for a better experience. Already planning my next visit!",
        image: Neha,
        rating: 5.0
    }
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <GradeIcon key={`full-${index}`} style={{ color: "gold" }} />
            ))}
            {halfStar && <StarHalfIcon style={{ color: "gold" }} />}
            {[...Array(emptyStars)].map((_, index) => (
                <StarOutlineIcon key={`empty-${index}`} style={{ color: "gold" }} />
            ))}
        </>
    );
};

const UserReview = () => {
    return (
        <div style={LimitedStyle.Background}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginTop: "0px" }}>
                    <div style={{ padding: "18px", textAlign: "center" }}>
                        <span style={{ color:'var(--blue_color)', fontSize: "20px" }}>User</span> <span style={{ fontSize: '40px', color: '#6c757d' }}>Reviews.</span>
                        <Typography style={{ fontSize: "16px",color:'var(--blue_color)' }}>
                            Insightful Perspectives: User Reviews Unveiled
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Carousel       responsive={responsive}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            infinite={true}
                    >
                        {reviews.map((review) => (
                            <motion.div
                                key={review.id}
                                initial={{ scale: 0.8, rotate: 15 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card style={LimitedStyle.ReviewCard}>
                                    <CardContent>
                                        <img src={review.image} alt={review.name} style={LimitedStyle.ReviewImage} />
                                        <Typography variant="h6" component="div" style={{ marginBottom: "10px" }}>
                                            {review.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" style={{textAlign:"justify", marginBottom: "10px" }}>
                                           
                                        <RiDoubleQuotesL style={{fontSize: "20px", color:"gold"}}/> {review.review}
                                        </Typography>
                                        <Typography>
                                            {renderRating(review.rating)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserReview;

const LimitedStyle = {
    Background: {
        padding: "20px",
        backgroundColor: "#f0f8ff" 
    },
    HeadingStyle: {
        padding: "10px 0",
        color: 'grey',
        fontSize: "40px"
    },
    ReviewCard: {
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        margin: "10px"
    },
    ReviewImage: {
        borderRadius: "50%",
        height: "140px",
        width: "140px",
        marginBottom: "15px"
    }
};
