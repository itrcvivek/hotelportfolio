import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import img from "../../../Assets/partner.svg";
import { RiDoubleQuotesL } from "react-icons/ri";


const PartnerTestimonials = () => {
    return (
        <div style={{ padding: "15px" }}>
            <Grid container spacing={2}>
                
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
                             <Typography variant="h4" align="start" style={{ textAlign:"center",
                                color:'var(--blue_color)'
                             }}>
                        Partner Testimonials
                    </Typography>
                            <CardContent style={{ padding: "40px" }}>
                                <Typography
                                style={{fontFamily: "Roboto Condensed", textAlign:"justify"}}
                                    variant="body1"
                                    gutterBottom
                                    sx={{
                                        fontSize: {
                                            xs: '14px',
                                            sm: '16px',
                                            md: '18px',
                                            lg: '20px',
                                        }
                                    }}
                                >
                                   <RiDoubleQuotesL style={{fontSize: "24px", color:'var(--blue_color)' }}/> We needed one tool to connect all our departments and a means to access critical operations data among all Coast properties. Housekeeping, as a part of the whole platform solution, gave our team members time savings, improved communication, and accountability.
                                </Typography>
                                <div style={{ padding: "20px" }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontSize: {
                                                xs: '12px',
                                                sm: '14px',
                                                md: '16px',
                                                lg: '18px',
                                            }
                                        }}
                                    >
                                        Danny Dang
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="textSecondary"
                                        sx={{
                                            fontSize: {
                                                xs: '10px',
                                                sm: '12px',
                                                md: '14px',
                                                lg: '16px',
                                            }
                                        }}
                                    >
                                        Director of Technology, Coast Hotels
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    >
                        <img src={img} alt="Example" style={{ width: '100%', height: "500px" }} />
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    );
};

export default PartnerTestimonials;
