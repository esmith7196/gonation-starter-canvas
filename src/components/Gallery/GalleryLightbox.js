import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import './lightboxStyle.css';

const GalleryLightbox = ({ photos, photoIndex, setLightbox, lightbox }) => {
  return (
    <Lightbox
      mainSrc={photos[photoIndex].imageUrl}
      nextSrc={photos[(photoIndex + 1) % photos.length].imageUrl}
      prevSrc={
        photos[(photoIndex + photos.length - 1) % photos.length].imageUrl
      }
      imageCaption={photos[photoIndex].caption}
      onCloseRequest={() => setLightbox({ ...lightbox, isOpen: false })}
      onMovePrevRequest={() =>
        setLightbox({
          ...lightbox,
          photoIndex: (photoIndex + photos.length - 1) % photos.length,
        })
      }
      onMoveNextRequest={() =>
        setLightbox({
          ...lightbox,
          photoIndex: (photoIndex + 1) % photos.length,
        })
      }
    />
  );
};

export default GalleryLightbox;
