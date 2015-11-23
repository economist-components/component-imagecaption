import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import ImageCaption from '..';
import Picture from '@economist/component-picture';

describe('ImageCaption', () => {

  it('is compatible with React.Component', () => {
    ImageCaption.should.be.a('function');
  });

  it('renders a React element', () => {
    const image = {
      sources: [
        { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
        { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
        { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
      ],
      alt: 'An alt attribute for the img',
    };
    React.isValidElement(<ImageCaption image={image} />).should.equal(true);
  });

  describe('Rendering', () => {

    const renderer = createRenderer();
    it('renders a <figure> with a <Picture> and <figcaption>', () => {
      const image = {
        sources: [
          { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
          { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ],
        alt: 'An alt attribute for the img',
      };
      renderer.render(
        <ImageCaption
          caption="A caption"
          image={image}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <figure className="image-caption">
          <Picture className="image-caption__image" {...image} />
          <figcaption className="image-caption__text">A caption</figcaption>
        </figure>
      );
    });

    it('allows overriding of className', () => {
      const image = {
        sources: [
          { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
          { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ],
        alt: 'An alt attribute for the img',
      };
      renderer.render(
        <ImageCaption
          className="foobar"
          caption="A caption"
          image={image}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <figure className="foobar">
          <Picture className="foobar__image" {...image} />
          <figcaption className="foobar__text">A caption</figcaption>
        </figure>
      );
    });

    it('reflects props.caption as the <figcaption> text', () => {
      const image = {
        sources: [
          { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
          { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ],
        alt: 'An alt attribute for the img',
      };
      renderer.render(
        <ImageCaption
          caption="foobar"
          image={image}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <figure className="image-caption">
          <Picture className="image-caption__image" {...image} />
          <figcaption className="image-caption__text">foobar</figcaption>
        </figure>
      );
    });

    it('does not render <figcaption> if props.caption is omitted', () => {
      const image = {
        sources: [
          { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
          { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ],
        alt: 'An alt attribute for the img',
      };
      renderer.render(
        <ImageCaption
          image={image}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <figure className="image-caption">
          <Picture className="image-caption__image" {...image} />
          {null}
        </figure>
      );
    });

  });

});
