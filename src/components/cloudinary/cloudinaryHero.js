import React from 'react';
import Img from 'react-cloudinary-lazy-image';

const CloudinaryHero = ({
  cloudName = 'gonation',
  imageName,
  maxWidth = 4000,
  height = '100vh',
  width = '100%',
  urlParams = 'g_face,c_lfill',
}) => {
  return (
    <div>
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
    </div>
  );
};

export default CloudinaryHero;
