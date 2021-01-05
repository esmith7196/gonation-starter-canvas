import React, { useContext } from 'react';
import { Image, Box } from 'theme-ui';

import GoNationContext from '../../@gonation/gonation-theme-canvas/context/GoNationContext';
import cloudinaryOptimizer from '../../helpers/cloudinaryOptimizer';

const PhotoThumbnail = ({ photo, handlePhotoClick, idx }) => {
  const { imageUrl, caption } = photo;
  const context = useContext(GoNationContext);
  const businessName = context.businessData.name;
  return (
    <Box
      onClick={() => handlePhotoClick(idx)}
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover': {
          img: {
            transform: `scale(1.5)`,
          },
        },
      }}>
      <Image
        sx={{
          transition: `transform .5s ease`,
          objectFit: 'cover',
          maxHeight: 200,
          height: 200,
          width: '100%',
        }}
        src={cloudinaryOptimizer(imageUrl)}
        alt={caption ? caption : `${businessName} gallery thumbnail`}
      />
    </Box>
  );
};

export default PhotoThumbnail;
