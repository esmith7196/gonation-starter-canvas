import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from 'theme-ui';
import { FaArrowLeft } from 'react-icons/fa';

import AlbumThumbnail from './AlbumThumbnail';
import PhotoThumbnail from './PhotoThumbnail';
import GalleryLightbox from './GalleryLightbox';

const Gallery = ({ data }) => {
  const [activeAlbum, setActiveAlbum] = useState({});
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    photoIndex: 0,
  });

  const handleAlbumClick = album => setActiveAlbum(album);
  const handlePhotoClick = idx =>
    setLightbox({
      isOpen: true,
      photoIndex: idx,
    });

  const renderAlbums = () =>
    data
      .filter(album => album.name !== 'Shouts')
      .map(album => (
        <Box sx={{ padding: 3, flex: ['`1 1 100%`', '`1 1 50%`', `1 1 33%`] }}>
          {' '}
          <AlbumThumbnail handleAlbumClick={handleAlbumClick} data={album} />
        </Box>
      ));

  const renderPhotos = () =>
    activeAlbum.photos.map((photo, idx) => (
      <Box sx={{ padding: 3, flex: ['1 1 100%', '1 1 50%', `1 1 25%`] }}>
        <PhotoThumbnail
          handlePhotoClick={handlePhotoClick}
          photo={photo}
          idx={idx}
        />
      </Box>
    ));

  const { photoIndex, isOpen } = lightbox;
  const { photos } = activeAlbum;
  return (
    <>
      <Box sx={{ maxWidth: '1200px', margin: 'auto', position: 'relative' }}>
        {!activeAlbum.name ? (
          <Flex sx={{ flexWrap: 'wrap' }}>{renderAlbums()}</Flex>
        ) : (
          <Box>
            <Box>
              <Flex
                onClick={() => setActiveAlbum({})}
                sx={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    span: {
                      color: 'primary',
                      transition: 'all .3s',
                    },
                  },
                }}>
                <FaArrowLeft color='#fff' />
                <Text
                  as='span'
                  sx={{ ml: 3, color: 'muted', textTransform: 'uppercase' }}>
                  Back to albums
                </Text>
              </Flex>
            </Box>

            <Heading as='h2' variant='galleryAlbumTitle'>
              {activeAlbum.name}
            </Heading>
            <Flex sx={{ flexWrap: 'wrap' }}>{renderPhotos()}</Flex>
          </Box>
        )}
      </Box>
      {isOpen && (
        <GalleryLightbox
          photos={photos}
          photoIndex={photoIndex}
          setLightbox={setLightbox}
          lightbox={lightbox}
        />
      )}
    </>
  );
};

export default Gallery;
