import React from 'react';
import { Box } from 'theme-ui';

import CloudinaryHero from '../cloudinary/cloudinaryHero';

const Hero = ({ heroData, children }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <CloudinaryHero {...heroData} />
      {children}
    </Box>
  );
};

export default Hero;
