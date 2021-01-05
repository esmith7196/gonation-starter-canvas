/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { Box, Flex, Image } from 'theme-ui';
import { useThemeUI } from 'theme-ui';

import Logo from '../../../../assets/logo.png';
import MobileBottomNav from '../../../../components/Navigations/MobileBottomNav';

const Navigation = ({ data }) => {
  const context = useThemeUI();

  const {
    theme: { colors },
  } = context;
  const pageData = data.data.allPageDataYaml.edges;
  const {
    name,
    avatar: { imageBaseUrl, imagePrefix },
  } = data.data.businessData;
  const avatarURL = `${imageBaseUrl}/${imagePrefix}`;

  const renderNavLinks = () =>
    pageData.map(({ node }) => (
      <Link
        key={node.page.path}
        activeStyle={{ color: colors.primary }}
        to={node.page.path}
        sx={{
          color: 'white',
          fontSize: [3, 2, 3],
          display: 'inline-block',
          marginX: 3,
          textTransform: 'uppercase',
          transition: 'all .3s',
          '&:hover': {
            color: 'primary',
            transition: 'all .3s',
          },
        }}>
        {node.page.title}
      </Link>
    ));

  const center = { justifyContent: 'center' };

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <Box as='nav' sx={{ background: 'black', padding: 4 }}>
        <Flex sx={center}>
          <Link to='/'>
            <Image
              sx={{ maxWidth: ['200px', '310px'] }}
              src={Logo || avatarURL}
              alt={name}></Image>
          </Link>
        </Flex>
        <Box sx={{ display: ['none', 'block'] }}>
          <Flex sx={{ ...center, mt: 5 }}>{renderNavLinks()}</Flex>
        </Box>
      </Box>

      {/* MOBILE NAVIGATION */}
      <Box sx={{ display: ['block', 'none'] }}>
        <MobileBottomNav
          data={{
            businessData: data.data.businessData,
            pageData,
          }}></MobileBottomNav>
      </Box>
    </>
  );
};

export default Navigation;
