import assert from 'assert';

describe('Array', () => {
  describe('#indexOf', () => {
    it('should return -1 when the balue is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
