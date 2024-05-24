import React from 'react';
import { Box, TextField, Button, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Person, Email, Phone, Note } from '@mui/icons-material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '1rem',
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variant="h4"
              gutterBottom
            >
              <span style={{ color: '#007bff', fontSize: '20px' }}>Get in</span>
              <span style={{ fontSize: '40px', color: '#6c757d' }}>contact.</span>
            </Typography>
            <Typography
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variant="body1"
              gutterBottom
            >
              Get in contact with one of the members of our team to understand how We support you.
            </Typography>
            <List
              component={motion.div}
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {['Save time', 'Spend less', 'Get organized'].map((text, index) => (
                <ListItem key={index} component={motion.div} variants={listItemVariants}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: '#6c757d' }} />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">{text}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.6, duration: 0.5 }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: <Person sx={{ mr: 1, color: 'grey' }} />,
                      }}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'grey',
                          },
                          '&:hover fieldset': {
                            borderColor: 'grey',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'grey',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: 'grey',
                        },
                        '& .MuiFormLabel-root': {
                          color: 'grey',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.8, duration: 0.5 }}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: <Person sx={{ mr: 1, color: 'grey' }} />,
                      }}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'grey',
                          },
                          '&:hover fieldset': {
                            borderColor: 'grey',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'grey',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: 'grey',
                        },
                        '& .MuiFormLabel-root': {
                          color: 'grey',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 1, duration: 0.5 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      margin="normal"
                      type="email"
                      required
                      InputProps={{
                        startAdornment: <Email sx={{ mr: 1, color: 'grey' }} />,
                      }}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'grey',
                          },
                          '&:hover fieldset': {
                            borderColor: 'grey',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'grey',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: 'grey',
                        },
                        '& .MuiFormLabel-root': {
                          color: 'grey',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 1.2, duration: 0.5 }}>
                    <TextField
                      fullWidth
                      label="Phone number"
                      margin="normal"
                      type="tel"
                      InputProps={{
                        startAdornment: <Phone sx={{ mr: 1, color: 'grey' }} />,
                      }}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'grey',
                          },
                          '&:hover fieldset': {
                            borderColor: 'grey',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'grey',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: 'grey',
                        },
                        '& .MuiFormLabel-root': {
                          color: 'grey',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 1.4, duration: 0.5 }}>
                    <TextField
                      fullWidth
                      label="Notes"
                      margin="normal"
                      multiline
                      rows={4}
                      InputProps={{
                        startAdornment: <Note sx={{ mr: 1, alignSelf: 'flex-start', color: 'grey' }} />,
                      }}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'grey',
                          },
                          '&:hover fieldset': {
                            borderColor: 'grey',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'grey',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: 'grey',
                        },
                        '& .MuiFormLabel-root': {
                          color: 'grey',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
              </Grid>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ duration: 0.2 }}
              >
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
                    color: 'white',
                  }}
                >
                  <ArrowOutwardIcon style={{ marginRight: '10px', color: '#fff' }} /> Get Touch
                </Button>
              </motion.div>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;
