import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Logo from '../assets/Logo.png'

const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <img src={Logo} alt="Logo" style={{ maxWidth: '150px' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Certificate Validation
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              Validate your certificates seamlessly.
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              Fast and reliable service.
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              Trusted by thousands.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" align="center" color="textSecondary">
              Contact Us: support@certificatevalidation.com
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              Follow us on social media
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              &copy; {new Date().getFullYear()} All rights reserved Team Nexus
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
