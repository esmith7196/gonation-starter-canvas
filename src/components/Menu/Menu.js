import React from 'react';
import { Box, Heading, Text, Flex } from 'theme-ui';

import splitSectionChildren from '../../helpers/splitSectionChildren';
import MenuItem from './MenuItem';

const Menu = ({ data, isLoaded, error }) => {
  // Recursively loop through menus and nested menus
  const renderMenu = (menu, nested, idx) => {
    const { section } = menu;
    const parsedSection = splitSectionChildren(menu);

    const uppercase = {
      textTransform: 'uppercase',
    };

    const headingBorder = {
      flex: 1,
      height: '3px',
      backgroundColor: 'primary',
    };

    return (
      <Box
        sx={{
          paddingX: 2,
          paddingY: 4,
          background: 'white',
          maxWidth: '1400px',
          margin: 'auto',
        }}>
        <Box>
          {section.name ? (
            <Flex
              sx={{ alignItems: 'center', justifyContent: 'center', mb: 4 }}>
              <Text as='span' sx={headingBorder}></Text>
              <Heading
                sx={{
                  textAlign: 'center',
                  fontSize: [5, 6],
                  color: 'secondary',
                  paddingX: 3,
                  ...uppercase,
                }}>
                {section.name}
              </Heading>
              <Text as='span' sx={headingBorder}></Text>
            </Flex>
          ) : (
            ''
          )}
          {section.desc ? (
            <Text as='p' sx={{ textAlign: 'center', mb: 3, ...uppercase }}>
              {section.desc}
            </Text>
          ) : (
            ''
          )}
          <Flex sx={{ flexWrap: 'wrap' }}>
            {parsedSection.childItems.map(({ item }, index) => {
              return <MenuItem item={item} menuItemIndex={index} />;
            })}
          </Flex>
        </Box>
        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) =>
          renderMenu(childSection, true, idx)
        )}
      </Box>
    );
  };

  return <>{renderMenu(data)}</>;
};

export default Menu;
