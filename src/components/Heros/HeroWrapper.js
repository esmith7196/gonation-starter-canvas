import React from 'react';
import { Box, Flex } from 'theme-ui';

const HeroWrapper = ({
  ContainerStyle = {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    padding: [3, 4, 5],
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 9,
    background: 'rgba(0,0,0,.3)',
  },
  BoxStyle = {
    maxWidth: 900,
  },
  children,
}) => {
  return (
    <Flex sx={ContainerStyle}>
      <Box sx={BoxStyle}>{children}</Box>
    </Flex>
  );
};
export default HeroWrapper;
