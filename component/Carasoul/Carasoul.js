import React from 'react';
import style from './car.module.css'
import ImageGallary from 'react-image-gallery';

const Carasoul = () => {
  const images = [
    {
      original: 'https://www.usnews.com/dims4/USNEWS/e0809c9/2147483647/crop/2000x1313%2B0%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F0d%2Fc3%2F396b0ea644d98747667d7b993ccd%2F170726-doctors-stock.jpg',
    },
    {
      original: 'https://www.businessinsider.in/photo/69795001/how-to-become-a-doctor.jpg?imgsize=137197',
    },
    {
      original: 'https://sanskriti.edu.in/blog/wp-content/uploads/2018/07/20173211539528.jpg',
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
      additionalClass={style.box}
    />
  );
};

export default Carasoul;
