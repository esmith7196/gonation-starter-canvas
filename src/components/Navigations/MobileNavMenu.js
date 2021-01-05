import React from 'react';
import { Box, Image } from 'theme-ui';

import MobileNavItem from './MobileNavItem';
import Logo from '../../assets/logo.png';

const MobileNavMenu = ({ localAvatar, withAvatar, navItems, businessData }) => {
  const { avatar, name } = businessData;
  const renderLogo = () =>
    localAvatar ? (
      <Image sx={{ maxWidth: 175, mb: 3 }} src={Logo} alt={name}></Image>
    ) : (
      <Image
        sx={{ maxWidth: 250 }}
        src={`${avatar.imageBaseUrl}/${avatar.imagePrefix}`}
        alt={name}
      />
    );

  const renderMobileItems = () =>
    navItems.map((itm, idx) => (
      <MobileNavItem item={itm} idx={idx}></MobileNavItem>
    ));

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '100%',
        zIndex: 99999,
        overflow: 'hidden',
        background: 'black',
        padding: 4,
      }}>
      {withAvatar ? renderLogo() : ''}
      <Box>{renderMobileItems()}</Box>
    </Box>
  );
};

export default MobileNavMenu;
