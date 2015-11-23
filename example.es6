import React from 'react';
import ImageCaption from '.';

export default (
  <div>
    <ImageCaption caption="My caption" src="http://worldif.economist.com/assets/434402ab5456@1x.jpg"
    srcset="http://worldif.economist.com//assets/434402ab5456@1x.jpg 1.0x,
            http://worldif.economist.com//assets/434402ab5456@1.3x.jpg 1.3x,
            http://worldif.economist.com//assets/434402ab5456@1.4x.jpg 1.4x,
            http://worldif.economist.com//assets/434402ab5456@1.6x.jpg 1.6x,
            http://worldif.economist.com//assets/434402ab5456@2x.jpg 2.0x,
            http://worldif.economist.com//assets/434402ab5456@2.6x.jpg 2.6x,
            http://worldif.economist.com//assets/434402ab5456@3.3x.jpg 3.3x"
     alt="this is the image description" />
  </div>
);
