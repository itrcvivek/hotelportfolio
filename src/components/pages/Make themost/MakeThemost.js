import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mobileIcon from "../../../icons/user-interface.png";
import BellIcon from "../../../icons/bell.png";
import WebChatIcon from "../../../icons/chat-box.png";
import StafIcon from "../../../icons/staff.png";
import maidIcon from "../../../icons/maid.png"

const MakeThemostData = [
  {
    id: 1,
    image: mobileIcon,
    Heading: "Contactless Checkin",
    content: "Guests can skip the Front Desk and complete the checkin on the fly, on their computer or personal mobile device with no third-party app to download. The digital guidebook answers most of guest questions without having to involve hotel staff."
  },
  {
    id: 2,
    image: BellIcon,
    Heading: "Guest Messaging & WebChat",
    content: " Provide white glove service that puts guests in charge. Automate routine texts when guests need you most, like before check-in. Artificial intelligence and other bells and whistles create a superior experience."
  },
  {
    id: 3,
    image: WebChatIcon,
    Heading: "One Integrated Hotel Messaging App",
    content: "Thoughtfully crafted with one interface and data system, HelloShift products fit together hand-in-glove. Communication is always first and never siloed. HelloShift is scalable and integrates with messaging apps (SMS, Messenger, WhatsApp, email) and PMS/hotel software."
  },
  {
    id: 4,
    image: maidIcon,
    Heading: " Housekeeping Management",
    content: " Let’s face it - scheduling room cleaning can sap hours from your team’s day - every day - forever and ever.    With this new feature, you will monitor the rooms' cleanliness in an easy and fast way."
  },
  {
    id: 5,
    image: StafIcon,
    Heading: "Staff Collaboration",
    content: "Say goodbye to your logbook, bottomless text/email threads, and confusing spreadsheets. Say hello to modern messaging and connect your hotels like never before. Use notes, tasks, checklists, and templates for preventive maintenance, flash reports, sales CRM, wiki, lost & found, tracking (e.g., daily pool temps), and more."
  },
];

// const colors = ['#b2dbfa', '#a29cef', '#f2bee7', '#90EEBF', '#ACDDDE'];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
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

const MakeThemost = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}
      >
        <div
          style={{ padding: "20px" }}
        >
          <span style={{ color: 'var(--blue_color)', fontSize: "40px" }}>Make the most</span> <span style={{ fontSize: '1.6em', color: '#6c757d' }}>of what you have.</span>

        </div>

        <Typography style={{ fontSize: "16px" , color:'var(--blue_color)'}}>
          Keep your finger on the pulse of operations without always being on-site. Unleash your team’s potential with modern messaging.
        </Typography>
      </motion.div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
      >
        {MakeThemostData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card elevation={0} style={{
              padding: "20px", borderRadius: "10px", margin: "10px",
              // backgroundColor: colors[index % colors.length]
            }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={data.image} alt="Example" style={MakeThemostStyle.ImgStyle} />
                  </Grid>
                  <Grid item xs={6} style={MakeThemostStyle.headingContainer}>
                    <Typography variant="p" component="div" style={{
                      marginTop:"20px"
                    }}>
                      {data.Heading}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      {data.content}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Carousel>
    </Container>
  );
};

export default MakeThemost;

const MakeThemostStyle = {
  ImgStyle: {
    background: "aliceblue",
    padding: "16px",
    height: "100px",
    borderRadius: "20px"
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: "20px"
  },
};
