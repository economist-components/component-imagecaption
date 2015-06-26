import React from 'react';
import json from './json.js';

export default class ImageCaption extends React.Component {

   constructor(props) {
    super(props);
  }


  render() {
    return (
      <figure className="TabView--View--Content">
         {(this.props.textposition==="top") ? <figcaption>{this.props.caption}</figcaption> : null}
         <img src={this.props.src}/>
         {(this.props.textposition!=="top") ? <figcaption>{this.props.caption}</figcaption> : null}
      </figure>
    );
  }
}
