import React from 'react';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const TheJourney = () => {
    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#cacbd7', padding: '30px', marginBottom: '25px', marginTop: '25px' }}>
            <Grid item xs={12} md={6} sx={{ marginBottom: { xs: '20px', md: 0 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h4" sx={{ marginBottom: '10px' }} style={TheJourneyStyle.TheTitle}>The Journey</Typography>
                    <Typography variant="body1" style={TheJourneyStyle.YouNextStepStyle}>Your Next Great Escape</Typography>
                </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Typography variant="body1" sx={{ marginBottom: '20px' }} style={TheJourneyStyle.readmoretext}>
                        Follow along as our editors curate destination guides and travel itineraries with an insider’s perspective on the very best of The Ritz-Carlton.
                    </Typography>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '15px 30px',
                            background: 'var(--blue_color)',
                            border: '1px solid black',
                            color: 'white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '20px',
                            fontWeight: '100',
                            fontFamily: 'fangsong'
                        }}
                    >
                        read more.
                    </motion.button>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default TheJourney;

const TheJourneyStyle = {
    TheTitle: {
        fontSize: '41px',
        fontStyle: 'italic',
        fontFamily: 'fangsong',
        color: '#333'
    },
    YouNextStepStyle: {
        fontSize: '51px',
        fontStyle: 'italic',
        fontFamily: 'fangsong',
        color: '#555'
    },
    readmoretext: {
        fontSize: '22px',
        fontStyle: 'initial',
        fontSynthesis: 'unset',
        fontFamily: 'ui-sans-serif',
        fontWeight: '300',
        color: 'black'
    }
};
