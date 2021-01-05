import React from 'react';
import { Text } from 'theme-ui';

const BusinessPhone = ({ number, sx }) => {
  return (
    <Text as='a' href={`tel: ${number}`} sx={sx}>
      {number}
    </Text>
  );
};

export default BusinessPhone;
