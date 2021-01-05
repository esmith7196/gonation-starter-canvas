import React, { useEffect } from 'react';
import { Box } from 'theme-ui';

import Hero from '../../../components/Heros/Hero';
import useApiRequest from '../../../hooks/useAPIRequest';
import Gallery from '../../../components/Gallery/Gallery';

const GalleryPage = props => {
  const { error, isLoaded, data } = useApiRequest(props.endpoint[0].url);

  if (error) {
    return <p>Error getting the gallery, please try again later...</p>;
  }

  if (!isLoaded) {
    return <p>Loading the gallery.</p>;
  }

  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-gallery-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>

      <Box sx={{ backgroundColor: 'dark', paddingY: [4, 5] }}>
        <Gallery error={error} isLoaded={isLoaded} data={data}></Gallery>
      </Box>
    </div>
  );
};

export default GalleryPage;
