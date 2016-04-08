import React, { PropTypes } from 'react';
import Picture from '@economist/component-picture';

function ImageCaption({ className = 'image-caption', sources, alt, caption }) {
  let captionEl = null;
  if (caption) {
    captionEl = (
      <figcaption className={`${ className }__text`}>
        {caption}
      </figcaption>
    );
  }
  return (
    <figure className={className}>
      <Picture
        className={`${ className }__image`}
        sources={sources}
        alt={alt}
      />
      {captionEl}
    </figure>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ImageCaption.propTypes = {
    alt: React.PropTypes.string.isRequired,
    className: PropTypes.string,
    caption: PropTypes.string,
    sources: React.PropTypes.arrayOf(React.PropTypes.shape({
      url: React.PropTypes.string.isRequired,
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired,
      dppx: React.PropTypes.number.isRequired,
      mime: React.PropTypes.string,
    })).isRequired,
  };
}

export default ImageCaption;
