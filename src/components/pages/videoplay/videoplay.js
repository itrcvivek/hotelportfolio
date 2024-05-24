import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import image from "../../../Assets/31098.jpg";

const VideoBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVideoOpen) {
      const video = videoRef.current;
      const container = containerRef.current;

      if (video && container) {
        video.width = container.offsetWidth;
        video.height = container.offsetHeight;
      }
    }
  }, [isVideoOpen]);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div style={{ padding: "20px", marginBottom:"25px" ,marginTop:"25px"}}>
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          width: '100%',
          height: '500px',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: isVideoOpen ? 'none' : `url(${image}) no-repeat center center`,
            backgroundSize: 'cover',
            opacity: isVideoOpen ? 0 : 0.5,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {!isVideoOpen && (
            <IconButton
              onClick={openVideo}
              sx={{
                color: 'white',
                fontSize: '3rem',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              <PlayCircleOutlineIcon fontSize="inherit"
                style={{
                  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                  padding: "30px"
                }} />
            </IconButton>
          )}
          {!isVideoOpen && (
            <Typography style={{ fontSize: "30px" }}>Play</Typography>
          )}
          {isVideoOpen && (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <video ref={videoRef} controls autoPlay>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              
              </video>
              <IconButton
                onClick={closeVideo}
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  color: 'white',
                }}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </div>

  );
}

export default VideoBanner;
