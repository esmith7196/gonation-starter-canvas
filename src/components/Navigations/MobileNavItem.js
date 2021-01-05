import React from 'react';
import { Flex, Box, useThemeUI } from 'theme-ui';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

const MobileNavItem = ({ item, idx }) => {
  const context = useThemeUI();
  const {
    theme: { colors },
  } = context;
  const navItem = item.node.page;

  const lineStyles = {
    width: '3px',
    height: 'auto',
    backgroundColor: 'primary',
    mr: 2,
  };
  return (
    <Fade left delay={idx * 100}>
      <Flex
        sx={{
          color: 'white',
          paddingBottom: 3,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}>
        <Box as='span' sx={lineStyles} />
        <Link activeStyle={{ color: colors.secondary }} to={navItem.path}>
          {navItem.title}
        </Link>
      </Flex>
    </Fade>
  );
};

export default MobileNavItem;
