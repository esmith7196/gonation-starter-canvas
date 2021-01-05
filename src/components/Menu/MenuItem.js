import React from 'react';
import { Box, Text } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import Price from './Price';

const MenuItem = ({ item, menuItemIndex }) => {
  const borderStyle = `2px solid`;
  const getBorder = idx => {
    const isFirstColumn = idx % 3 === 0;
    // const isSecondColumn = (idx + 1) % 2 === 0;
    if (isFirstColumn) {
      return borderStyle;
    }
  };
  return (
    <Box
      sx={{
        width: ['100%', '50%', '33%'],
        textAlign: 'center',
        pb: 4,
        borderRight: ['', '', getBorder(menuItemIndex)],
        '&:nth-child(3n)': {
          borderLeft: ['none', 'none', '2px solid'],
        },
        borderColor: ['none', 'none', 'dark'],
      }}>
      <Fade>
        <Text
          as='p'
          sx={{
            fontWeight: 800,
            fontSize: 3,
            textTransform: 'uppercase',
          }}>
          {item.name}
        </Text>

        {item.desc && (
          <Text
            as='p'
            sx={{
              fontWeight: 300,
              letterSpacing: 1,
              maxWidth: '375px',
              ml: 'auto',
              mr: 'auto',
              textTransform: 'uppercase',
            }}>
            {item.desc}
          </Text>
        )}
        <Price item={item} />
      </Fade>
    </Box>
  );
};

export default MenuItem;
