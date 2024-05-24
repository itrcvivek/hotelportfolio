import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <> 
        <div style={{
               background: "linear-gradient(135deg, #f0f4ff 0%, #d9e8ff 100%)",
        }}>

            <Grid container>
                <Grid item xs={12}>
                    <div style={HeaderStyle.containerStyle}>
                        <Typography style={HeaderStyle.headingFirst}>
                            Surpass Guest Expectations Without <br />Adding More Staff
                        </Typography>
                        <Typography style={HeaderStyle.childHeading}>
                            The All-In-One Toolkit for Hotel Operations
                            Guest Messaging · Contactless Checkin ·<br /> Staff Collaboration · Housekeeping · & More
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div style={HeaderStyle.imgContainerStyle}>
                        <img
                            src="https://cdn-bcbml.nitrocdn.com/liwJAXFeAKmOombrlBfpNMAiZUgISRvJ/assets/images/optimized/rev-39f0546/helloshift1.wpenginepowered.com/wp-content/themes/helloshift/dist/img/Hotel_Communications_Platform-472d949c2898e9a984fd948c47ebbd10.svg"
                            alt="Hotel Operations"
                            style={HeaderStyle.imgStyle}
                        />
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <div style={HeaderStyle.containerStyle}>
                        <Typography style={HeaderStyle.headingLast}>
                            Before HelloShift: Work is scattered, staff feel overworked, guests are dissatisfied, and everyone is stressed.
                        </Typography>
                        <Typography style={HeaderStyle.childHeadingLast}>
                            After HelloShift: Everything's organized in one place, staff is on top of things, guests are fully engaged, and a sense of calm sets in.
                        </Typography>
                    </div>
                    <div style={HeaderStyle.buttonContainer}>
                        <Button  elevation={0} variant="contained" style={HeaderStyle.buttonStyle}>
                            Request Demo 
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
          
        </>
    );
};

export default Header;

const HeaderStyle = {
    headingFirst: {
        textAlign: "center",
        fontSize: "36px",
        fontWeight: "bold",
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
    },
    childHeading: {
        textAlign: "center",
        fontSize: "18px",
        marginTop: "10px",
        color: "#209FFB",
        fontFamily: "'Roboto', sans-serif",
    },
    containerStyle: {
        padding: "40px",
    },
    headingLast: {
        textAlign: "left",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "20px",
        color: "#209FFB",
        fontFamily: "'Roboto', sans-serif",
    },
    childHeadingLast: {
        textAlign: "left",
        fontSize: "16px",
        marginTop: "10px",
        color: "#555",
        fontFamily: "'Roboto', sans-serif",
    },
    imgContainerStyle: {
        textAlign: "center",
        margin: "20px 0",
        width: "100%", 
    },
    imgStyle: {
        width: "100%", 
        height: "auto",
    },
    buttonContainer: {
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px",
    },
    buttonStyle: {
        backgroundColor: "#209FFB", 
        color: "#fff", 
        padding: "15px 30px", 
        fontSize: "16px", 
        fontFamily: "'Roboto', sans-serif",
        textTransform:"capitalize"
    },
};
