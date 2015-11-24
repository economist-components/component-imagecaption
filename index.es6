import React, { PropTypes } from 'react';
import Picture from '@economist/component-picture';

function ImageCaption({ className = 'image-caption', sources, alt, caption }) {
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
        sources={sources}
        alt={alt}
      />
      {captionEl}
    </figure>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ImageCaption.propTypes = {
    className: PropTypes.string,
    caption: PropTypes.string,
    ...(Picture.propTypes || {}),
  };
}

export default ImageCaption;
