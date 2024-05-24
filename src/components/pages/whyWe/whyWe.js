import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import receptionists from "../../../Assets/receptionists.jpg";
import reception from "../../../Assets/reception.jpg";
import HotelBg from "../../../Assets/19852152_6184969.jpg";

const WhoWeAre = () => {
    return (
        <div style={{
            padding: "5px",
            marginBottom: "19px",
            marginTop: "10px"
        }}>
            <div style={{ padding: "18px", textAlign: "center", backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <span style={{ color: 'var(--blue_color)', fontSize: "20px" }}>Why</span> <span style={{ fontSize: '40px', color: '#6c757d' }}>We Are.</span>
                <Typography style={{ fontSize: "16px", color:'var(--blue_color)' }}>
                    Exploring the Depths of Identity
                </Typography>
            </div>
            <div style={{
                padding: "15px",
                backgroundImage: `url(${HotelBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',

            }}>

                <Grid container spacing={2} style={{marginBottom:"30px"}}>

                    <Grid item xs={12} md={6}>
                        <Grid container justifyContent="center" alignItems="center" style={{ marginTop: "13px" }}>
                            <Grid item xs={6}>
                                <motion.div
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <img src={receptionists} alt="Hotel" style={{ width: '99%', height: '300px', maxWidth: '400px', borderRadius: "30% 70% 70% 30% / 63% 30% 70% 37% " }} />
                                </motion.div>
                            </Grid>
                            <Grid item xs={6} style={{ marginTop: "40px" }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <img src={reception} alt="Hotel" style={{ width: '100%', height: '250px', maxWidth: '400px', }} />
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Card elevation={0} style={{
                                padding: "20px", borderRadius: "10px", marginTop: "40px",
                                backgroundColor: "#f0f8ff"
                            }}>

                                <CardContent style={{ padding: "40px" }}>
                                    <Typography
                                        // variant="body1"
                                        gutterBottom
                                        sx={{
                                            fontSize: {
                                                xs: '14px',
                                                sm: '16px',
                                                md: '18px',
                                                lg: '20px',
                                            }
                                        }}
                                        style={{fontFamily: "Roboto Condensed", textAlign:"justify"}}
                                    >
                                        Hello one Shift is fast, easy, and familiar with notes, tasks, comments, and checklists. Say goodbye to logbooks and old school hotel software with endlessly complex modules. Mentions, tags, and an integrated platform turn everyday communication into a treasure trove of information.
                                        HelloShift’s pricing is transparent and affordable. Use HelloShift to do more with less. It’s the essential app hotel teams learn quickly and love to use.
                                    </Typography>

                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                </Grid>
            </div>
        </div>

    );
};

export default WhoWeAre;
