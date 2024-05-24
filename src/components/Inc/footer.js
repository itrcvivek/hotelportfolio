import React from 'react';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Google as GoogleIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Home as HomeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Print as PrintIcon,
  Diamond as DiamondIcon,
} from '@mui/icons-material';

export default function App() {
  return (
    <Box sx={{ bgcolor: 'var(--blue_color)', color: 'white', mt: 4, pt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: 1,
          borderColor: 'divider',
          py: 2,
          px: 4,
        }}
      >
        <Box>
          <IconButton href='https://facebook.com' color='inherit' style={{ padding: "11px", color: "#007bff", background: "white", margin: '0 5px' }}>
            <FacebookIcon />
          </IconButton >
          <IconButton href='https://twitter.com' color='inherit' style={{ padding: "11px", color: "#007bff", background: "white", margin: '0 5px' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href='https://google.com' color='inherit' style={{ padding: "11px", color: "#007bff", background: "white", margin: '0 5px' }}>
            <GoogleIcon />
          </IconButton>
          <IconButton href='https://instagram.com' color='inherit' style={{ padding: "11px", color: "#007bff", background: "white", margin: '0 5px' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href='https://linkedin.com' color='inherit' style={{ padding: "11px", color: "#007bff", background: "white", margin: '0 5px' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} lg={4} xl={3}>
            <Typography variant="h6" component="div" gutterBottom>
              <DiamondIcon sx={{ mr: 1 }} />
              Hotel Deluxe
            </Typography>
            <Typography variant="body2">
              Experience the luxury and comfort at Hotel Deluxe, your perfect getaway for a relaxing stay.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2} lg={2} xl={2}>
            <Typography variant="h6" component="div" gutterBottom>
              Products
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Rooms
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Suites
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Dining
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Spa
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={6} md={3} lg={2} xl={2}>
            <Typography variant="h6" component="div" gutterBottom>
              Useful links
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Pricing
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Settings
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Orders
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#!" color="inherit" underline="hover">
                Help
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} lg={3} xl={3}>
            <Typography variant="h6" component="div" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              <HomeIcon sx={{ mr: 1 }} />
              123 Main Street, Kanpur, India
            </Typography>
            <Typography variant="body2">
              <EmailIcon sx={{ mr: 1 }} />
              info@hoteldeluxe.com
            </Typography>
            <Typography variant="body2">
              <PhoneIcon sx={{ mr: 1 }} /> +91 123 456 7890
            </Typography>
            <Typography variant="body2">
              <PrintIcon sx={{ mr: 1 }} /> +91 123 456 7891
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ textAlign: 'center', py: 2, bgcolor: 'rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="body2">
          © 2024 Copyright:&nbsp;
          <Link href="/" color="inherit" underline="hover">
            hoteldeluxe.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
