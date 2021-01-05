import React, { useState } from 'react';
import { Box, Flex, Text } from 'theme-ui';
import { Link } from 'gatsby';
import HamburgerMenu from 'react-hamburger-menu';

import { GoHome } from 'react-icons/go';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiSubdirectoryLeft } from 'react-icons/bi';
import getGoogleStr from '../../helpers/getGoogleStr';
import MobileNavMenu from './MobileNavMenu';

const MobileBottomNav = ({ data }) => {
  const [navStatus, setNavStatus] = useState({
    navIsOpen: false,
  });
  const { businessData, pageData } = data;

  const getPage = intendedPage =>
    pageData.filter(({ node }) => node.page.type === intendedPage)[0].node.page
      .path;

  const bottomNavItems = [
    {
      text: 'Go Home',
      ico: size => <GoHome size={true && size} />,
      type: 'link',
      to: '/',
    },
    {
      text: 'Menu',
      ico: size => <GiForkKnifeSpoon size={true && size} />,
      type: 'link',
      to: getPage('menu'),
    },
    {
      text: 'Call',
      ico: size => <AiOutlinePhone size={true && size} />,
      type: 'external',
      externalLink: `tel: ${businessData.phone}`,
    },
    {
      text: 'Directions',
      ico: size => <BiSubdirectoryLeft size={true && size} />,
      type: 'external',
      externalLink: getGoogleStr(businessData),
    },
    {
      text: 'Other Options',
      ico: () => (
        <HamburgerMenu
          isOpen={navStatus.navIsOpen}
          menuClicked={() =>
            setNavStatus({
              navIsOpen: !navStatus.navIsOpen,
            })
          }
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.5}
        />
      ),
      type: 'menu',
    },
  ];

  const getIconType = item => {
    const { type, to, externalLink, ico } = item;
    switch (type) {
      case 'link':
        return <Link to={to}>{ico(30)}</Link>;
      case 'external':
        return (
          <Text
            as='a'
            href={externalLink}
            target='_blank'
            rel='noopener noreferrer'>
            {ico(30)}
          </Text>
        );
      case 'menu':
        return <Box>{ico(30)}</Box>;
      default:
        return null;
    }
  };

  const renderIcons = () =>
    bottomNavItems.map((item, idx) => (
      <Flex
        key={idx}
        sx={{
          padding: 3,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box>{getIconType(item)}</Box>
      </Flex>
    ));
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: 999999,
          width: '100%',
          boxShadow: '0 5px 30px rgba(0,0,0,.2)',
          background: 'white',
        }}>
        <Flex sx={{ alignItems: 'center' }}>{renderIcons()}</Flex>
      </Box>
      {navStatus.navIsOpen ? (
        <MobileNavMenu
          businessData={businessData}
          withAvatar
          localAvatar
          navItems={pageData}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default MobileBottomNav;
