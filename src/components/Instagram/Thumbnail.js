import React from 'react';
import Img from 'gatsby-image';
import { Box } from 'theme-ui';

const Thumbnail = ({ data }) => {
  const node = data;
  return (
    <Box sx={{ width: ['100%', '100%', '33%', '25%'], padding: 3 }}>
      <Img alt='nope...' fluid={node.localImage.childImageSharp.fluid}></Img>
    </Box>
  );
};

export default Thumbnail;
