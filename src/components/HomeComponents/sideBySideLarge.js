import React from 'react';
import { Flex, Button, Text, Box, Heading, Image } from 'theme-ui';
import { Link } from 'gatsby';

import CloudinaryImage from '../Images/cloudinaryImage';
import cloudinaryOptimizer from '../../helpers/cloudinaryOptimizer';
import getShoutImage from '../../helpers/getShoutImage';
import addHTTP from '../../helpers/addHTTPS';

const sideBySideLarge = ({ withShout, shoutData, reversed }) => {
  if (withShout) {
    const { error, isLoaded, data } = shoutData;

    const renderCTAs = () => {
      const buttonNames = Object.keys(data.shout.ctas);
      return buttonNames
        .filter(btn => btn !== 'cta1' && btn !== 'cta2')
        .map(button => {
          return (
            <Text
              as='a'
              target='_blank'
              rel='noopener noreferrer'
              href={addHTTP(data.shout.ctas[button])}>
              <Button
                sx={{
                  '&:hover': {
                    color: 'text',
                  },
                }}>
                {button}
              </Button>
            </Text>
          );
        });
    };

    if (isLoaded && !error) {
      return (
        <Box sx={{ paddingX: [3, 4, 5], paddingY: [2, 3, 6] }}>
          <Flex sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
            <Box sx={{ width: ['100%', '50%'], padding: 3 }}>
              <Box sx={{ maxWidth: 600, margin: 'auto' }}>
                <Heading as='h3' sx={{ fontSize: 6, mb: 3, fontWeight: 300 }}>
                  Recent Shout from {data.shout.business.name}
                </Heading>
                <Text as='p' sx={{ mb: 3 }}>
                  {data.shout.text}
                </Text>
                {data.shout.ctas && renderCTAs()}
              </Box>
            </Box>
            <Box sx={{ width: ['100%', '50%'] }}>
              {!data.shout.image.isDefault ? (
                <Image
                  src={cloudinaryOptimizer(
                    getShoutImage(data.shout.image.image.cloudinaryId, 2000)
                  )}></Image>
              ) : (
                <CloudinaryImage
                  imageName={`sites/ponza/ponza-index-1`}
                  maxWidth={800}
                  width={'100%'}></CloudinaryImage>
              )}
            </Box>
          </Flex>
        </Box>
      );
    } else {
      return <Text>Loading latest announcement.</Text>;
    }
  }

  return (
    <Box sx={{ paddingX: [3, 4, 5], paddingY: [2, 3, 6] }}>
      <Flex sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Box sx={{ width: ['100%', '50%'], padding: 3 }}>
          <Box sx={{ maxWidth: 600, margin: 'auto' }}>
            <Heading as='h3' sx={{ fontSize: 6, mb: 3, fontWeight: 300 }}>
              Book a private event
            </Heading>
            <Text as='p' sx={{ mb: 3 }}>
              Let us host your private event! View our private events page to
              see more details and get in touch with us.
            </Text>
            <Link to='/private-events'>
              <Button
                sx={{
                  '&:hover': {
                    color: 'text',
                  },
                }}>
                Book A Private Event
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: ['100%', '50%'], order: reversed ? '-1' : '1' }}>
          <CloudinaryImage
            imageName={`sites/ponza/ponza-index-1`}
            maxWidth={800}
            width={'100%'}></CloudinaryImage>
        </Box>
      </Flex>
    </Box>
  );
};

export default sideBySideLarge;
