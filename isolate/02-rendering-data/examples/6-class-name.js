'use strict';

/* el.className

  An important property for UI development is .className
  This allows you to coordinate your views with your website's style sheet

*/

const expect = chai.expect;

/**
 * this function renders text into a DOM header with the given level
 * it will throw an error if the level is not in the range 1 -> 6
 * you can optionally assign multiple class names to your element
 * @param {number} level - what header level to render
 * @param {string} text - the text to render into the header
 * @param {string[]} [classList=[]] - an array of class names
 * @returns {HTMLHeadingElement} a rendered header element
 */
const renderHeader = (level, text, classList = []) => {
  if (level < 1 || 6 < level) {
    throw new RangeError('level must be in range: 1 -> 6');
  }

  const headerEl = document.createElement(`h${level}`);
  headerEl.innerHTML = text;
  for (const className of classList) {
    headerEl.classList.add(className);
  }
  return headerEl;
};

describe('renderHeader: renders DOM headers of different levels and classes', () => {
  describe('an H3 with text: "hello", and no classes', () => {
    const actual = renderHeader(3, 'hello');
    it('has tagName "H3"', () => {
      expect(actual).to.have.property('tagName', 'H3');
    });
    it('has text: "hello"', () => {
      expect(actual).to.have.text('hello');
    });
    it('has className: ""', () => {
      expect(actual).to.have.property('className', '');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });
  describe('an H1 with text: "good bye", and two classes', () => {
    const actual = renderHeader(1, 'good bye', ['fancy', 'hover-left']);
    it('has tagName "H1"', () => {
      expect(actual).to.have.property('tagName', 'H1');
    });
    it('has text: "good bye"', () => {
      expect(actual).to.have.text('good bye');
    });
    it('has className: "fancy hover-left "', () => {
      expect(actual).to.have.property('className', 'fancy hover-left');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });
  describe('does not allow invalid header levels', () => {
    it('throws an error if level is less than 1', () => {
      const shouldThrow = () => renderHeader(0, 'oops!');
      expect(shouldThrow).to.throw(RangeError, 'level must be in range: 1 -> 6');
    });
    it('throws an error if level is greater than 6', () => {
      const shouldThrow = () => renderHeader(7, 'oops!');
      expect(shouldThrow).to.throw(RangeError, 'level must be in range: 1 -> 6');
    });
  });
});
