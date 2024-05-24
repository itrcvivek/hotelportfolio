import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'; 
import hotelStaff from "../../../Assets/medium-shot-woman-working-luxury-restaurant.jpg";
import workingcafe from "../../../Assets/working-cafe.jpg";

const AboutUsPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading-screen">
                    <div className="loader"></div>
                </div>
            ) : (
                <Container style={{ backgroundColor: '#f9f9f9', padding: '40px 10px' }}>
                    <Grid item xs={12} style={{ marginBottom: "7px" }}>
                        <div style={{ padding: "18px", textAlign: "center" }}>
                            <span style={{ color: '#007bff', fontSize: "20px" }}>About</span> 
                            <span style={{ fontSize: '40px', color: '#6c757d' }}>Us.</span>
                            <Typography style={{ fontSize: "16px" }}>
                                Welcome to our hotel!
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Grid container justifyContent="flex-end">
                                <Grid item xs={12}>
                                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                                        <Paper elevation={0} style={{ padding: '20px', boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}>
                                            <Typography variant="body1" paragraph style={{ lineHeight: '1.6', color: '#333' }}>
                                                Welcome to our hotel! We are committed to providing you with an exceptional experience from the moment you step through our doors. Our prime location in the heart of the city ensures that you are never far from the excitement and attractions that our vibrant city has to offer.
                                            </Typography>
                                            <Typography variant="body1" paragraph style={{ lineHeight: '1.6', color: '#333' }}>
                                                Our dedicated staff is here to assist you with anything you may need during your stay. From arranging transportation to recommending local restaurants and activities, we are always available to ensure that your visit is seamless and stress-free.
                                            </Typography>
                                            <Typography variant="body1" style={{ lineHeight: '1.6', color: '#333' }}>
                                                Thank you for choosing our hotel for your stay. We are honored to be your home away from home and look forward to welcoming you back again soon.
                                            </Typography>
                                            {/* <motion.div
                                                whileHover={{ scale: 0.5 }}
                                                whileTap={{ scale: 0.3 }}
                                                transition={{ duration: 0.2 }}
                                            > */}
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    style={{
                                                        marginTop: '20px',
                                                        backgroundColor: '#007bff',
                                                        border: '1px solid #626262',
                                                        borderRadius: '9px',
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'center',
                                                        padding: '11px 38px',
                                                        textDecoration: 'none',
                                                        display: 'flex',
                                                        textTransform: 'none',
                                                        color: "white",
                                                    }}
                                                >
                                                    <ArrowOutwardIcon style={{ marginRight: '10px', color: '#fff' }} /> Demo
                                                </Button>
                                            {/* </motion.div> */}
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item xs={6}>
                                    <motion.div
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        <img src={hotelStaff} alt="Hotel Staff" style={{ width: '97%', height: '500px', maxWidth: '400px', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }} />
                                    </motion.div>
                                </Grid>
                                <Grid item xs={6}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        <img src={workingcafe} alt="Working Cafe" style={{ width: '100%', height: '300px', maxWidth: '400px', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }} />
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default AboutUsPage;
