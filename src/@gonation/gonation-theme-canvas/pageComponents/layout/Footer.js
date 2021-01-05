import React from 'react';
import { Box, Image, Flex, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';

import Logo from '../../../../assets/logo.png';

import BusinessAddress from '../../../../components/helpers/BusinessAddress';
import BusinessPhone from '../../../../components/helpers/BusinessPhone';
import SocialIcons from '../../../../components/helpers/SocialIcons';
import PoweredBy from '../../../../components/Icons/PoweredBy';

const Footer = ({ data }) => {
  const { businessData, allPageDataYaml } = data.data;
  const context = useThemeUI();
  const {
    theme: { colors },
  } = context;

  const renderSiteMap = () =>
    allPageDataYaml.edges.map(({ node }) => (
      <Box
        sx={{
          ml: [0, 4],
          paddingX: [3],
          color: 'white',
          textTransform: 'uppercase',
          transition: 'all .3s',
          mb: [3, 3, 0],
          '&:hover': {
            color: 'primary',
            transition: 'all .3s',
          },
        }}>
        <Link to={node.page.path}>{node.page.title}</Link>
      </Box>
    ));

  const renderBusinessAddress = () => (
    <Box
      sx={{ mb: 3, textAlign: ['center', 'center', 'right'], width: '100%' }}>
      <BusinessAddress businessData={businessData} sx={footerLinkStyle} />
    </Box>
  );

  const renderBusinessPhone = (
    <Box
      sx={{ mb: 3, textAlign: ['center', 'center', 'right'], width: '100%' }}>
      <BusinessPhone number={businessData.phone} sx={footerLinkStyle} />
    </Box>
  );
  return (
    <>
      <Box sx={{ backgroundColor: 'dark', paddingX: 4, paddingY: 5 }}>
        <Flex
          sx={{
            justifyContent: ['center', 'center', 'space-between'],
            flexWrap: 'wrap',
          }}>
          <Box
            sx={{
              width: ['100%', '100%', 'auto'],
              textAlign: 'center',
              mb: [3, 3, 0],
            }}>
            <Link to='/'>
              <Image src={Logo} alt={businessData.name} />
            </Link>
          </Box>
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              width: ['100%', '100%', 'auto'],
            }}>
            <Flex
              sx={{
                justifyContent: ['center', 'center', 'flex-end'],
                mb: 3,
                width: '100%',
                flexWrap: 'wrap',
              }}>
              {renderSiteMap()}
            </Flex>
            {renderBusinessAddress()}
            {renderBusinessPhone}
            <Flex
              sx={{
                justifyContent: ['center', 'center', 'flex-end'],
                width: '100%',
              }}>
              <SocialIcons></SocialIcons>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box sx={{ textAlign: 'center', py: 3 }}>
        <Box sx={{ maxWidth: '200px', margin: 'auto' }}>
          <PoweredBy fillColor={colors.primary} />
        </Box>
      </Box>
    </>
  );
};

export default Footer;

const footerLinkStyle = {
  color: 'white',
  '&:hover': {
    color: 'primary',
  },
};
