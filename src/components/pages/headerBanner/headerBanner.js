import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import img2 from "../../../Assets/HeaderBanner.jpg"
import { Button } from '@mui/material';
import "./mediaStyle.css"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const HeaderBanner = () => {
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center">
                {/* <Grid item xs={12}>
                    <div className="slider-container" >
                        <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
                            <div className="each-slide">
                                <div>
                                    <Typography variant="h4" sx={{ marginBottom: '10px' }} style={TheJourneyStyle.TheTitle}>Surpass Guest Expectations Without Adding More Staff</Typography>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div>
                                    <img
                                        src={img2}
                                        alt="Slide 2"
                                        style={{ width: '100%', height: '500px' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        style={{ position: 'absolute', bottom: 20, left: 20, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}
                                    >
                                        Slide 2
                                    </Typography>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div>
                                    <img
                                        src={img2}
                                        alt="Slide 3"
                                        style={{ width: '100%', height: '500px' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        style={{ position: 'absolute', bottom: 20, left: 20, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}
                                    >
                                        Slide 3
                                    </Typography>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </Grid> */}

                <Grid item xs={12}>
                    <Slide slidesToScroll={2} slidesToShow={2} indicators={true} >
                        <div className='one' style={{
                            padding: "40px"
                        }}>
                            
                            <Typography variant="h4" sx={{ marginBottom: '10px' }} style={TheJourneyStyle.TheTitle} className='mediaTitle'>Surpass <span style={{
                                fontFamily: "Poetsen One, sans-serif",
                                fontSize: "44px",
                                fontWeight: "900"
                            }}>Guest</span> Expectations Without<br/> Adding More Staff</Typography>
                            <Typography variant='p'  style={TheJourneyStyle.TheTitlehiled} className='mediap'>
                                Before HelloShift: Work is scattered, staff feel overworked, guests are dissatisfied, and everyone is stressed.
                                After HelloShift: Everything's organized in one place, staff is on top of things, guests are fully engaged, and a sense of calm sets in.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: '20px',
                                    backgroundColor: 'var(--blue_color)',
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
 

                        </div>

                        <div style={TheJourneyStyle.ImageContainer}>
                            <img src={img2} alt='Limited Offer' style={TheJourneyStyle.CardStyle} className='mediaImgCss' />
                        </div>


                    </Slide>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderBanner;



const TheJourneyStyle = {
    TheTitle: {
        fontSize: "40px",
        marginTop: "6px",
        // padding: "12px",
        color: "var(--blue_color)",
        // fontStyle: "italic",
        // fontFamily: "fangsong",
        fontWeight: "200"
    },
    CardStyle: {
        borderRadius: "15px",
        height: "470px",
        width: "100%",

    },
    TheTitlehiled: {
        fontSize: "14px",
        lineHeight: " 27px",
        textAlign:"justify",
        color:'var(--blue_color)'
    
    }
}