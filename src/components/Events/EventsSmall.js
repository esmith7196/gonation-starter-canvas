import React from 'react';
import { Flex, Text, Box, Image } from 'theme-ui';
import dayjs from 'dayjs';

import Heading from '../Styled_UI/Heading';
import eventDaysReducer from '../../helpers/eventDaysReducer';

const EventsSmall = ({ data }) => {
  const getEventTime = offer => {
    const { eventDays } = offer;
    if (eventDays) {
      return (
        <Text sx={{ textTransform: 'capitalize' }}>
          {eventDaysReducer(eventDays)}
        </Text>
      );
    }
  };

  const Event = offer => (
    <Flex sx={{ padding: 3, width: ['100%', '100%', '50%'], flexWrap: 'wrap' }}>
      <Box sx={{ width: ['100%', '25%'] }}>
        <Image src={offer.imageurl} alt={offer.name}></Image>
      </Box>
      <Box sx={{ flex: '1', paddingX: 2 }}>
        <Heading sx={{ color: 'dark', fontSize: 3, mb: 0, fontWeight: 600 }}>
          {offer.name}
        </Heading>
        <Heading sx={{ color: 'dark', fontSize: 2, my: 2, fontWeight: 500 }}>
          {getEventTime(offer)}
        </Heading>
        <Text>{offer.description}</Text>
      </Box>
    </Flex>
  );
  return (
    <>
      <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
        <Flex sx={{ flexWrap: 'wrap' }}>{data.map(offer => Event(offer))}</Flex>
      </Box>
    </>
  );
};

export default EventsSmall;
