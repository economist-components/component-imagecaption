import ImageCaption from './../index.es6';
import React from 'react';
const TestUtils = React.addons.TestUtils;
describe('ImageCaption', () => {
  it('should exist', () => {
    ImageCaption.should.be.a('function');
  });

  it('renders a component', () => {
    (<ImageCaption/>).should.be.an('object');
  });
});

describe('Rendering', () => {
  const renderer = TestUtils.createRenderer();
  let component;
  beforeEach(() => {
    component = renderer.render(React.createElement(ImageCaption, {
      caption: 'A caption',
      src: 'src',
      srcset: 'srcset',
      alt: 'An alt attribute for the img',
    }));
    component = renderer.getRenderOutput();
  });

  it('renders a figure.ImageCaption', () => {
    component
      .should.have.property('type', 'figure');
    component
      .should.have.deep.property('props.className', 'ImageCaption');
  });

  it('renders a <img />', () => {
    component
      .should.have.deep.property('props.children[0].type', 'img');
  });

  it('renders a <img src="src" />', () => {
    component
      .should.have.deep.property('props.children[0].props.src', 'src');
  });

  it('renders a <img srcset="srcset" />', () => {
    component
      .should.have.deep.property('props.children[0].props.srcSet', 'srcset');
  });

  it('renders a <img alt="An alt attribute for the img" />', () => {
    component
      .should.have.deep.property('props.children[0].props.alt', 'An alt attribute for the img');
  });

  it('renders a <figcaption />"', () => {
    component
      .should.have.deep.property('props.children[1].type', 'figcaption');
  });

  it('renders a <figcaption>A caption</figcaption>"', () => {
    component
      .should.have.deep.property('props.children[1].props.children', 'A caption');
  });
});
