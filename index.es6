import React from 'react';

export default class ImageCaption extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      textposition: React.PropTypes.string,
      caption: React.PropTypes.string,
      src: React.PropTypes.string,
      srcset: React.PropTypes.string,
      alt: React.PropTypes.string,
    };
  }

  render() {
    return (
      <figure className={this.props.className}>
         {(this.props.textposition === 'top') ? <figcaption>{this.props.caption}</figcaption> : null}
         <img src={this.props.src} srcSet={this.props.srcset} alt={this.props.alt} />
         {(this.props.textposition !== 'top') ? <figcaption>{this.props.caption}</figcaption> : null}
      </figure>
    );
  }
}
