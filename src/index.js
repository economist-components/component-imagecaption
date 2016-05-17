import React, { PropTypes } from 'react';
import Picture from '@economist/component-picture';

function ImageCaption({
  className,
  sources,
  alt,
  caption,
}) {
  let captionEl = null;
  if (caption) {
    captionEl = (
      <figcaption className="image-caption__text">
        {caption}
      </figcaption>
    );
  }
  return (
    <figure className={[ 'image-caption' ].concat(className).join(' ').trim()}>
      <Picture
        className="image-caption__image"
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
