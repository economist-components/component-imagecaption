import React, { PropTypes } from 'react';
import Picture from '@economist/component-picture';

function ImageCaption({ className = 'image-caption', image, caption }) {
  let captionEl = null;
  if (caption) {
    captionEl = (
      <figcaption className={`${className}__text`}>
        {caption}
      </figcaption>
    );
  }
  return (
    <figure className={className}>
      <Picture
        className={`${className}__image`}
        {...image}
      />
      {captionEl}
    </figure>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ImageCaption.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(Picture.propTypes).isRequired,
    caption: PropTypes.string,
  };
}

export default ImageCaption;
