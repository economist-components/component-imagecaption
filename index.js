import React from 'react';
import json from './json.js';

export default class ImageCaption extends React.Component {

   constructor(props) {
    super(props);
  }


  render() {
    return (
      <figure className="TabView--View--Content">
         <img src={this.props.src}/>
         <figcaption>{this.props.caption}</figcaption>
      </figure>
    );
  }
}



