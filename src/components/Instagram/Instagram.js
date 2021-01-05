import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { Box, Flex } from 'theme-ui';

import Thumbnail from './Thumbnail';

const Instagram = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInstagramContent(limit: 25) {
          edges {
            node {
              media_type
              caption
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const imageNodes = data.allInstagramContent.edges;

  const renderImages = () =>
    imageNodes.map(({ node }) => <Thumbnail data={node} />);

  return <Flex sx={{ flexWrap: 'wrap' }}>{renderImages()}</Flex>;
};

export default Instagram;
