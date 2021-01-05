import React from 'react';
import { Box, Image, Text, Flex } from 'theme-ui';

import cloudinaryOptimizer from '../../helpers/cloudinaryOptimizer';

const AlbumThumbnail = ({ data, handleAlbumClick }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover': {
          img: {
            transform: `scale(1.5)`,
          },
        },
      }}
      onClick={() => handleAlbumClick(data)}>
      <Image
        sx={{
          maxHeight: '300px',
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transition: `transform .5s ease`,
        }}
        src={cloudinaryOptimizer(data.photos[0].imageUrl, '1200')}
      />
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          as='h4'
          sx={{
            backgroundColor: 'dark',
            paddingX: 4,
            paddingY: 3,
            color: 'white',
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}>
          {data.name}
        </Text>
      </Flex>
    </Box>
  );
};

export default AlbumThumbnail;
