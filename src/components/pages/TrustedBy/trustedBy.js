import { Grid, Typography } from '@mui/material';
import React from 'react';
import image from "../../../Assets/trustimg3.svg";
import image2 from "../../../Assets/trustimg2.svg";
import image3 from "../../../Assets/trustimg1.svg";
import image4 from "../../../Assets/trusted.svg";
import image5 from "../../../Assets/trusted4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

const data = [
    {
        id: 1,
        image: image,
    },
    {
        id: 2,
        image: image2,
    },
    {
        id: 3,
        image: image3,
    },
    {
        id: 4,
        image: image4,
    },
    {
        id: 5,
        image: image5,
    },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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

const TrustedBy = () => {
    return (
        <div style={{ padding: "15px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginBottom: "7px" }}>
                    <div style={{ padding: "18px", textAlign: "center" }}>
                        <span style={{ color: 'var(--blue_color)', fontSize: "20px" }}>Trusted By</span> <span style={{ fontSize: '40px', color: '#6c757d' }}> Franchisees Of.</span>
                        <Typography style={{ fontSize: "16px",color:'var(--blue_color)' }}>
                            And 100s of independent hotels.
                        </Typography>
                    </div>

                </Grid>
                <Grid item xs={12}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                        >
                            {data.map((item) => (
                                <div key={item.id} style={LimitedStyle.ImageContainer}>
                                    <img src={item.image} alt='Limited Offer' style={LimitedStyle.CardStyle} />
                                </div>
                            ))}
                        </Carousel>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    );
};

export default TrustedBy;

const LimitedStyle = {
    // HeadingStyle: {
    //     fontWeight: "bold",
    //     padding: "10px 0"
    // },
    CardStyle: {
        borderRadius: "15px",
        height: "150px",
        width: "100%",
        boxShadow: "rgb(27 27 207 / 85%) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    },
    ImageContainer: {
        position: 'relative',
        margin: "10px"
    },
};
