// src/pages/ValidateCertificate.js
import React from 'react';
// import ValidationSection from '../components/ValidationSection';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ValidationSection from '../ValidationSection';

const ValidateCertificate = () => {
  return (
    <Container>
      <Box my={2}>
        <ValidationSection />
      </Box>
    </Container>
  );
};

export default ValidateCertificate;
