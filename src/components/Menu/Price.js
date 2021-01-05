import React from 'react';
import { Text, Flex, Box } from 'theme-ui';

const Price = ({ item }) => {
  const { variants } = item;

  const renderVariants = () => {
    return variants.map(variant => {
      if (variant.label.length) {
        return (
          <Text as='p'>
            {variant.label}: ${variant.price}
          </Text>
        );
      } else {
        return <Text as='p'>${variant.price}</Text>;
      }
    });
  };

  return <Box>{renderVariants()}</Box>;
};

export default Price;
