import React from 'react';
import { Text } from 'theme-ui';

import getGoogleStr from '../../helpers/getGoogleStr';

const BusinessAddress = ({ businessData, sx }) => {
  const { city, state, street, zip } = businessData;
  const addressString = `${street} ${city} ${state}, ${zip}`;
  return (
    <Text
      as='a'
      target='_blank'
      rel='noopener noreferrer'
      href={getGoogleStr(businessData)}
      sx={sx}>
      {addressString}
    </Text>
  );
};

export default BusinessAddress;
