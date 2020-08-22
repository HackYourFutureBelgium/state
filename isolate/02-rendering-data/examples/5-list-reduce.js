'use strict';

const expect = chai.expect;

/**
 * renders an array of strings into an ordered list
 * @param {string[]} arr - the array of strings to render
 * @param {number} startNum - starting index for the list
 * @returns {HTMLOListElement} the rendered list
 */
const renderListReduce = (arr, startNum) => {

  const renderLi = (item) => {
    const liEl = document.createElement('li');
    liEl.innerHTML = item;
    return liEl;
  }
  const appendLi = (list, nextLi) => {
    list.appendChild(nextLi);
    return list;
  };
  const olEl = arr
    .map(renderLi)
    .reduce(appendLi, document.createElement('ol'));

  olEl.start = startNum;

  return olEl;
};


describe('renderListReduce: renders a list from an array of strings', () => {

  describe('a linked button element opening to google', () => {
    const actual = renderListReduce(['toad', 'frog', 'salamander'], 0);

    it('has tagName: "OL"', () => {
      expect(actual).to.have.property('tagName', 'OL');
    });
    it('has start: 0', () => {
      expect(actual).to.have.property('start', 0);
    });
    it('has childElementCount: 3', () => {
      expect(actual).to.have.property('childElementCount', 3);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "toad"', () => {
        expect(actualChild).to.have.text('toad');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "frog"', () => {
        expect(actualChild).to.have.text('frog');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[2]`, () => {
      const actualChild = actual.children[2];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "salamander"', () => {
        expect(actualChild).to.have.text('salamander');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
  });

  describe('a linked button element opening to google', () => {
    const actual = renderListReduce(['orange', 'blue'], 3);

    it('has tagName: "OL"', () => {
      expect(actual).to.have.property('tagName', 'OL');
    });
    it('has start: 3', () => {
      expect(actual).to.have.property('start', 3);
    });
    it('has childElementCount: 2', () => {
      expect(actual).to.have.property('childElementCount', 2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "orange"', () => {
        expect(actualChild).to.have.text('orange');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "blue"', () => {
        expect(actualChild).to.have.text('blue');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
  });
});
