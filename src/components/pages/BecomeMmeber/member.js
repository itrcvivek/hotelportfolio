import React from 'react';
import './member.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button } from '@mui/material';


const Member = () => {
    return (
        <div className="banner">
            <div className="overlay">
                <h1 className="member-title">Become a Marriott Bonvoy Member</h1>
                <p style={{
                    color: "white"
                }}>Get exclusive rates, earn points towards free nights <br /> and more.</p>
                <div className="buttons">

                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginTop: '20px',
                            backgroundColor: 'transparent',
                            border: '2px solid white',
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
                        <ArrowOutwardIcon style={{ marginRight: '10px', color: '#fff' }} /> Join Us
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default Member;
