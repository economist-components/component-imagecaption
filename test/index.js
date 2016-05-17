import 'babel-polyfill';
import Imagecaption from '../src';
import Picture from '@economist/component-picture';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Imagecaption', () => {
  const props = {
    sources: [
      { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
    ],
    alt: 'An alt',
  };
  it('renders a React element', () => {
    React.isValidElement(<Imagecaption {...props} />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let imagecaption = null;
    beforeEach(() => {
      rendered = mount(
        <Imagecaption
          caption="A Caption"
          className="foobar"
          {...props}
        />
      );
      imagecaption = rendered.find('.image-caption');
    });

    it('renders a top level figure.image-caption', () => {
      imagecaption.should.have.tagName('figure');
      imagecaption.should.have.className('image-caption');
    });

    it('renders a <figcaption /> with the caption text', () => {
      imagecaption.find('.image-caption__text').should.have.tagName('figcaption');
      imagecaption.find('.image-caption__text').should.have.text('A Caption');
    });

    it('renders <Picture /> component', () => {
      imagecaption.should.contain(
        <Picture
          className="image-caption__image"
          {...props}
        />
      );
    });

    it('can add a className', () => {
      imagecaption.should.have.className('foobar');
    });

  });

});
