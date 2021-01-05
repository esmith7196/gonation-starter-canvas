import React from 'react';
import Img from 'react-cloudinary-lazy-image';

const CloudinaryImage = ({
  cloudName = 'gonation',
  imageName,
  maxWidth = 4000,
  height = '100vh',
  width = '100%',
  urlParams = 'g_face,c_lfill',
}) => {
  return (
    <Img
      cloudName={cloudName}
      imageName={imageName}
      fluid={{
        maxWidth: maxWidth,
      }}
      style={{
        height: height,
        width: width,
      }}
      urlParams={urlParams}
    />
  );
};

export default CloudinaryImage;
