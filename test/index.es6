import ImageCaption from './../index.es6';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
describe('ImageCaption', () => {
  it('is compatible with React.Component', () => {
    ImageCaption.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<ImageCaption/>).should.equal(true);
  });

  describe('Rendering', () => {
    const renderer = TestUtils.createRenderer();
    it('renders a figure.ImageCaption with an img and figcaption', () => {
      renderer.render(<ImageCaption
        caption="A caption"
        src="src"
        srcSet="srcset"
        alt="An alt attribute for the img"
      />, {});
      renderer.getRenderOutput().should.deep.equal(
        <figure className="ImageCaption">
          <img src="src" srcSet="srcset" alt="An alt attribute for the img"/>
          <figcaption>A caption</figcaption>
        </figure>
      );
    });

    it('allows overriding of className', () => {
      renderer.render(<ImageCaption
        className="foobar"
        caption="A caption"
        src="src"
        srcSet="srcset"
        alt="An alt attribute for the img"
      />, {});
      renderer.getRenderOutput().should.deep.equal(
        <figure className="foobar">
          <img src="src" srcSet="srcset" alt="An alt attribute for the img"/>
          <figcaption>A caption</figcaption>
        </figure>
      );
    });

    it('reflects props.src to the <img> tag', () => {
      renderer.render(<ImageCaption
        caption="A caption"
        src="foobar"
        srcSet="srcset"
        alt="An alt attribute for the img"
      />, {});
      renderer.getRenderOutput().should.deep.equal(
          <figure className="ImageCaption">
            <img src="foobar" srcSet="srcset" alt="An alt attribute for the img"/>
            <figcaption>A caption</figcaption>
          </figure>
        );
    });

    it('reflects props.srcSet to the <img> tag', () => {
      renderer.render(<ImageCaption
        caption="A caption"
        src="src"
        srcSet="foobar"
        alt="An alt attribute for the img"
      />, {});
      renderer.getRenderOutput().should.deep.equal(
          <figure className="ImageCaption">
            <img src="src" srcSet="foobar" alt="An alt attribute for the img"/>
            <figcaption>A caption</figcaption>
          </figure>
        );
    });

    it('reflects props.alt to the <img> tag', () => {
      renderer.render(<ImageCaption
        caption="A caption"
        src="src"
        srcSet="srcset"
        alt="foobar"
      />, {});
      renderer.getRenderOutput().should.deep.equal(
          <figure className="ImageCaption">
            <img src="src" srcSet="srcset" alt="foobar"/>
            <figcaption>A caption</figcaption>
          </figure>
        );
    });

    it('reflects props.caption as the <figcaption> text', () => {
      renderer.render(<ImageCaption
        caption="foobar"
        src="src"
        srcSet="srcset"
        alt="An alt attribute for the img"
      />, {});
      renderer.getRenderOutput().should.deep.equal(
          <figure className="ImageCaption">
            <img src="src" srcSet="srcset" alt="An alt attribute for the img"/>
            <figcaption>foobar</figcaption>
          </figure>
        );
    });

    it('does not render <figcaption> if props.caption is omitted', () => {
      renderer.render(<ImageCaption
        src="src"
        srcSet="srcset"
        alt="An alt attribute for the img"
      />, {});
      renderer.getRenderOutput().should.deep.equal(
          <figure className="ImageCaption">
            <img src="src" srcSet="srcset" alt="An alt attribute for the img"/>
            {null}
          </figure>
        );
    });
  });
});
