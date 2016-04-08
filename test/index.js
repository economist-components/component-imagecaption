import chai from 'chai';
chai.should();

import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import ImageCaption from '../src';
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
    React.isValidElement(<ImageCaption {...image} />).should.equal(true);
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
          {...image}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      renderOutput.type.should.equal('figure');
      renderOutput.props.children[0].type.name.should.equal('Picture');
      renderOutput.props.children[1].type.should.equal('figcaption');
      /*
      Waiting for fix: https://github.com/facebook/react/pull/5299
      renderOutput.should.deep.equal(
        <figure className="image-caption">
          <Picture className="image-caption__image" {...image} />
          <figcaption className="image-caption__text">A caption</figcaption>
        </figure>
      );
      */
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
          {...image}
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
          {...image}
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
          {...image}
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
