import React from 'react';
import { Box, Text } from 'theme-ui';
import Heading from '../Styled_UI/Heading';
import Skeleton from 'react-loading-skeleton';
const aboutFeature = ({ title, data, isLoaded }) => {
  return (
    <Box sx={{ padding: 4, paddingY: [3, 4, 6], bg: 'black' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Heading
          sx={{
            color: 'white',
            letterSpacing: 4,
            paddingX: [0, 4],
            paddingY: 2,
            display: 'inline-block',
            textTransform: 'uppercase',
          }}>
          {title}
        </Heading>
      </Box>
      <Box sx={{ maxWidth: 900, margin: 'auto' }}>
        <Text as='p' sx={{ color: 'white', lineHeight: 1.75 }}>
          {!isLoaded ? <Skeleton count={'5'}></Skeleton> : data.desc}
        </Text>
      </Box>
    </Box>
  );
};

export default aboutFeature;
