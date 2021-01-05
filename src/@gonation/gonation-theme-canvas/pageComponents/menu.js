import React from 'react';
import { Box } from 'theme-ui';

import useApiRequest from '../../../hooks/useAPIRequest';
import Hero from '../../../components/Heros/Hero';
import Menu from '../../../components/Menu/Menu';

const MenuComponent = props => {
  const endpoint = props.endpoint[0];
  const PL_ID = '1';

  const { error, isLoaded, data } = useApiRequest(
    endpoint.url.replace('{PL_ID}', PL_ID ? PL_ID : 1)
  );

  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-menu-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
      <Box sx={{ backgroundColor: 'dark', padding: [1, 3], paddingY: 4 }}>
        {isLoaded && !error && data[0] ? (
          <Menu data={data[0]} />
        ) : (
          <p>loading...</p>
        )}
      </Box>
    </div>
  );
};

export default MenuComponent;
