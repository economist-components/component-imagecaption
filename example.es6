import React from 'react';
import ImageCaption from './index.es6';

export default (
  <div>
    <ImageCaption caption="My caption" src="http://lorempixel.com/g/300/169/food"
    srcset="/assets/434402ab5456@1x.jpg 1.0x,/assets/434402ab5456@1.3x.jpg 1.3x,
    /assets/434402ab5456@1.4x.jpg 1.4x,/assets/434402ab5456@1.6x.jpg 1.6x,
    /assets/434402ab5456@2x.jpg 2.0x,/assets/434402ab5456@2.6x.jpg 2.6x,
    /assets/434402ab5456@3.3x.jpg 3.3x" alt="this is the image description" />
    <ImageCaption caption="My caption" src="http://lorempixel.com/g/300/169/food"
    srcset="/assets/434402ab5456@1x.jpg 1.0x,/assets/434402ab5456@1.3x.jpg 1.3x,
    /assets/434402ab5456@1.4x.jpg 1.4x,/assets/434402ab5456@1.6x.jpg 1.6x,
    /assets/434402ab5456@2x.jpg 2.0x,/assets/434402ab5456@2.6x.jpg 2.6x,
    /assets/434402ab5456@3.3x.jpg 3.3x" alt="this is the image description" textposition="top" />
  </div>
);
