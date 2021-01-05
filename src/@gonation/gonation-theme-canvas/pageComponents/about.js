import React from 'react';

import useApiRequest from '../../../hooks/useAPIRequest';
import Hero from '../../../components/Heros/Hero';
import AboutFeature from '../../../components/About/aboutFeature';

const About = props => {
  const { error, isLoaded, data } = useApiRequest(props.endpoint[0].url);

  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-about-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
      <AboutFeature
        title={`Our Story`}
        data={data}
        error={error}
        isLoaded={isLoaded}></AboutFeature>
    </div>
  );
};

export default About;
