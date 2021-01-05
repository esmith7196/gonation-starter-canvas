import React from 'react';
import { Heading as StyledHeading } from 'theme-ui';

const Heading = ({ children, style = {}, sx = {} }) => {
  const BASE_STYLES = { color: 'white', fontSize: 6, fontWeight: 300, mb: 4 };

  return (
    <StyledHeading
      sx={{
        ...BASE_STYLES,
        ...style,
        ...sx,
      }}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
