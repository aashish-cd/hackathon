import React from 'react';
import ImageGallary from 'react-image-gallery';

const Carasoul = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <ImageGallary
      items={images}
      showNav={false}
      autoPlay={true}
      showThumbnails={false}
      slideDuration={1000}
      showPlayButton={false}
      showFullscreenButton={false}
      originalTitle={'hello '}
    />
  );
};

export default Carasoul;
