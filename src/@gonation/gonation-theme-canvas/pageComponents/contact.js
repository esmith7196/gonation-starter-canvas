import React from 'react';
import { Flex, Box, Image, useThemeUI } from 'theme-ui';
import { FaMobile, FaDirections } from 'react-Icons/fa';

import Hero from '../../../components/Heros/Hero';
import useApiRequest from '../../../hooks/useAPIRequest';
import HoursDisplay from '../../../components/Hours/HoursDisplay';
import cloudinaryOptimizer from '../../../helpers/cloudinaryOptimizer';
import BusinessAddress from '../../../components/helpers/BusinessAddress';
import BusinessPhone from '../../../components/helpers/BusinessPhone';
import Heading from '../../../components/Styled_UI/Heading';
import NetlifyForm from '../../../components/Forms/NetlifyForm';

const Contact = props => {
  const { error, isLoaded, data } = useApiRequest(props.endpoint[0].url);
  const context = useThemeUI();
  const {
    theme: { colors },
  } = context;
  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-contact-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
      <Box sx={{ bg: 'primary', padding: 3, paddingY: [4, 5] }}>
        <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
          <Heading
            as='h2'
            sx={{
              fontSize: [6],
              color: 'white',
              mb: 3,
            }}>
            Contact Us
          </Heading>
          <Flex
            sx={{
              backgroundColor: 'muted',
              borderRadius: 5,
              flexWrap: 'wrap',
            }}>
            <Box
              sx={{
                flex: ['1 1 100%', '1 1 100%', '1 1 50%', '1 1 33%'],
                padding: 2,
              }}>
              <Heading as='h2' sx={{ mb: 3, fontSize: 4, color: 'dark' }}>
                Hours
              </Heading>
              {isLoaded && <HoursDisplay data={data} />}
            </Box>
            <Box
              sx={{
                flex: ['1 1 100%', '1 1 100%', '1 1 50%', '1 1 33%'],
                padding: 2,
              }}>
              <Heading as='h2' sx={{ mb: 3, fontSize: 4, color: 'dark' }}>
                Reach Us
              </Heading>
              {isLoaded && data && (
                <>
                  <Flex sx={{ mb: 3, alignItems: 'center' }}>
                    <FaMobile
                      color={colors.primary}
                      style={{ marginRight: '1rem' }}></FaMobile>
                    <BusinessAddress businessData={data} />
                  </Flex>

                  <Flex sx={{ alignItems: 'center' }}>
                    <FaDirections
                      color={colors.primary}
                      style={{ marginRight: '1rem' }}></FaDirections>
                    <BusinessPhone number={data.phone} />
                  </Flex>
                </>
              )}
            </Box>
            <Box sx={{ flex: ['1 1 100%', '1 1 100%', '1 1 33%', '1 1 33%'] }}>
              <Image
                sx={{
                  height: '100%',
                  width: '100%',
                  minHeight: 300,
                  objectFit: 'cover',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
                src={cloudinaryOptimizer(
                  'https://res.cloudinary.com/gonation/image/upload/v1609381470/sites/ponza/ponza-contact-square.jpg'
                )}
              />
            </Box>
          </Flex>
          <Flex
            sx={{
              flexWrap: 'wrap',
              mt: 5,
              alignItems: 'stretch',
            }}>
            <Box sx={{ flex: [`1 1 100%`, `1 1 100%`, '1 1 50%'], pr: [0, 3] }}>
              <Box
                sx={{
                  backgroundColor: 'muted',
                  borderRadius: 5,
                  padding: 3,
                }}>
                <Heading
                  sx={{
                    textTransform: 'capitalize',
                    fontSize: 4,
                    color: 'dark',
                    mb: 3,
                  }}>
                  Send us a message
                </Heading>
                <NetlifyForm />
              </Box>
            </Box>

            <Box sx={{ flex: [`1 1 100%`, `1 1 100%`, '1 1 50%'], pl: [0, 3] }}>
              <Box
                sx={{
                  backgroundColor: 'muted',
                  borderRadius: 5,

                  mt: [3, 0],
                }}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12027.293262417532!2d-73.4502302!3d41.0947069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83d1ed28339a7932!2sPonza%20Italian%20Kitchen%20%26%20Pizza!5e0!3m2!1sen!2sus!4v1609802316018!5m2!1sen!2sus'
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                    minHeight: '501px',
                  }}
                  frameborder='0'
                  allowfullscreen=''
                  aria-hidden='false'
                  tabindex='0'></iframe>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
