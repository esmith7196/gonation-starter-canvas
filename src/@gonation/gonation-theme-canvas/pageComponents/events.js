import React from 'react';
import { Text, Box } from 'theme-ui';

import Hero from '../../../components/Heros/Hero';
import useApiRequest from '../../../hooks/useAPIRequest';
import EventSmall from '../../../components/Events/EventsSmall';
import combineEvents from '../../../helpers/combineEvents';
import Heading from '../../../components/Styled_UI/Heading';

const Events = props => {
  const pageTitle = props.data.pageContext.pageContext.title;
  const {
    error: eventError,
    isLoaded: eventIsLoaded,
    data: eventData,
  } = useApiRequest(props.endpoint[0].url);
  const {
    error: recurringError,
    isLoaded: recurringIsLoaded,
    data: recurringData,
  } = useApiRequest(props.endpoint[1].url);

  // todo do this in theme OR use some form of props/context from higher component
  const withFilter = true;
  const filterIn = 'offers';

  if (!eventIsLoaded && !recurringIsLoaded) {
    return <Text>Loading...</Text>;
  }
  if (eventError && recurringError) {
    return <Text>Error occurred</Text>;
  }

  if (pageTitle !== 'Events') {
    return (
      <Box>
        <Hero
          heroData={{
            imageName: 'sites/ponza/ponza-events-hero',
            height: 'calc(85vh - 246.75px)',
            maxWidth: 2000,
            mainTitle: '',
          }}></Hero>
        <Box sx={{ paddingX: 2, paddingY: 3 }}>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: 5,
              color: 'primary',
              fontWeight: 'bold',
            }}>
            {pageTitle}
          </Heading>
          {eventData.events && recurringData.events && (
            <EventSmall
              data={combineEvents(eventData, recurringData).filter(evt =>
                evt.eventTags.includes('Food')
              )}></EventSmall>
          )}
        </Box>
      </Box>
    );
  }

  const combinedRegularEvents = combineEvents(eventData, recurringData).filter(
    evt => evt && !evt.eventTags.includes('Food')
  );

  return (
    <Box>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-events-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
      <Box sx={{ paddingX: 2, paddingY: 3 }}>
        <Heading
          sx={{
            textAlign: 'center',
            fontSize: 5,
            color: 'primary',
            fontWeight: 'bold',
          }}>
          {pageTitle}
        </Heading>
        {eventData.events && recurringData.events && (
          <EventSmall data={combinedRegularEvents}></EventSmall>
        )}
        <Box sx={{ textAlign: 'center' }}>
          {!combinedRegularEvents.length && (
            <Text>Currently no events at the moment. Check back later!</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
