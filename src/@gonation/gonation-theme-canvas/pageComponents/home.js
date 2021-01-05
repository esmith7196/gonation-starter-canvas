import React from 'react';
import { Button } from 'theme-ui';

import useApiRequest from '../../../hooks/useAPIRequest';

import Hero from '../../../components/Heros/Hero';
import HeroWrapper from '../../../components/heros/HeroWrapper';
import Heading from '../../../components/Styled_UI/Heading';
import SideBySideLarge from '../../../components/HomeComponents/sideBySideLarge';
import Instagram from '../../../components/Instagram/Instagram';

const Home = props => {
  const { error, isLoaded, data } = useApiRequest(props.endpoint[1].url);

  return (
    <>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-hero',
          height: 'calc(75vh)',
          maxWidth: 2000,
        }}>
        <HeroWrapper>
          <Heading sx={{ fontSize: [5, 6, 7] }}>
            A spirited neighborhood restaurant, and gathering place.
          </Heading>
          <Button variant='primary' sx={{ mr: [3, 5] }}>
            Order Online
          </Button>
          <Button variant='secondary' sx={{ mt: 2 }}>
            Make A Reservation
          </Button>
        </HeroWrapper>
      </Hero>

      <SideBySideLarge
        withShout
        shoutData={{
          error,
          isLoaded,
          data,
        }}></SideBySideLarge>
      <SideBySideLarge reversed />
      <Instagram></Instagram>
    </>
  );
};

export default Home;
