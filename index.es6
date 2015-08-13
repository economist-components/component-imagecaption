import React from 'react';

export default class ImageCaption extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      caption: React.PropTypes.string,
      src: React.PropTypes.string.isRequired,
      srcSet: React.PropTypes.string,
      alt: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: 'ImageCaption',
    };
  }

  render() {
    let figcaption = null;
    if (this.props.caption) {
      figcaption = (<figcaption>{this.props.caption}</figcaption>);
    }
    return (
      <figure className={this.props.className}>
         <img src={this.props.src} srcSet={this.props.srcSet} alt={this.props.alt} />
         {figcaption}
      </figure>
    );
  }
}
