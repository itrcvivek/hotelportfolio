import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import {  motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import HouseIcon from '@mui/icons-material/House';
import MessageIcon from '@mui/icons-material/Message';
import ChatIcon from '@mui/icons-material/Chat';

const plans = [
  {
    name: 'Starter',
    price: 50,
    features: [
      { icon: <WorkIcon />, text: 'Staff Collaboration' },
      { icon: <HouseIcon />, text: 'Add Housekeeping Management for $1.25 per room per month' },
      { icon: <MessageIcon />, text: 'Guest Messaging' },
      { icon: <ChatIcon />, text: 'Add Contactless Checkin for $1.25 per room per month' },
      { text: 'With all-in-one, save extra on bundle discount.' },
    ],
    backgroundColor: '#718caa',
  },
  {
    name: 'Pro',
    price: 160,
    features: [
      { icon: <MessageIcon />, text: 'Guest Messaging' },
      { icon: <ChatIcon />, text: 'Contactless Checkin' },
      { icon: <ChatIcon />, text: 'Website Chat' },
      { icon: <WorkIcon />, text: 'Staff Collaboration' },
      { icon: <HouseIcon />, text: 'Housekeeping Management' },
      { text: 'With all-in-one, save extra on bundle discount.' },
    ],
    backgroundColor: '#718caa',  
  },
];

const iconStyle = {
  backgroundColor: 'white',
  padding: '8px',
  borderRadius: '50%',
  display: 'inline-flex',
  color:"#007bff",
  justifyContent: 'center',
  alignItems: 'center',
};

const HotelPricePage = () => {
  
  return (
    < Grid Container spacing={2} style={{padding:"10px"}}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <span style={{ color: '#007bff', fontSize: "40px" }}>Plan</span> <span style={{ fontSize: '3.6em', color: '#6c757d' }}>Price.</span>
      </div>
      <Grid container spacing={3}>
        {plans.map((plan, index) => (
          <Grid item key={index} xs={12} md={6} sm={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ backgroundColor: plan.backgroundColor, height: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="h5" component="div" align="center" sx={{ padding: '10px',  }}>
                    {plan.name}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom align="center" sx={{ color: 'white', padding: '10px',  }}>
                    Starts at ${plan.price}/mo
                  </Typography>
                  <List sx={{ flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                      >
                        <ListItem>
                          {feature.icon && (
                            <ListItemIcon>
                              <Box sx={iconStyle}>
                                {feature.icon}
                              </Box>
                            </ListItemIcon>
                          )}
                          <ListItemText style={{ color: "white" }} primary={feature.text} />
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                  <button
                  style={{
                    padding:"15px 30px",
                    width:"50%",
                    margin:"0 auto",
                    cursor:"ponter"
                  }}
                  
                  >
                    Request Call
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HotelPricePage;
