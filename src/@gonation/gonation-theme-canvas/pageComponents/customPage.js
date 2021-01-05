import React from 'react';
import { Box, Text } from 'theme-ui';

import Hero from '../../../components/Heros/Hero';
import Heading from '../../../components/Styled_UI/Heading';

const customPage = () => {
  const linkStyle = {
    color: 'primary',
  };
  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-about-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
      <Box sx={{ paddingY: 4, paddingX: 3 }}>
        <Box sx={{ maxWidth: 800, margin: 'auto' }}>
          <Heading sx={{ color: 'dark', textAlign: 'center' }}>
            Private Events @ Ponza
          </Heading>
          <Text as='p' sx={{ mb: 3 }}>
            Enjoy multiple safe space private dining room options for your
            company meetings and events, networking receptions, and milestone
            celebrations.
          </Text>
          <Text as='p'>
            Contact Ponza’s Event Coordinator{' '}
            <Text sx={linkStyle} as='a' href='tel: 203-807-6900'>
              203-807-6900
            </Text>{' '}
            or EMAIL{' '}
            <Text
              sx={linkStyle}
              as='a'
              href='mailto: vbsandolo@gmail.com'
              target='_blank'
              rel='noopener noreferrer'>
              vbsandolo@gmail.com
            </Text>
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default customPage;
