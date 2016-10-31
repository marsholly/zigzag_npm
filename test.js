const assert = require('chai').assert;

const zigzag = require('./');

describe('zigzag', () => {
  it('ZIGZAG THE STRING INTO N ROWS AND CONCATANATE ALL ROWS', ()=> {
    assert.equal(zigzag('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
    assert.equal(zigzag('HAVEAGOODDAY', 4), 'HOAGOYVADAED');
    assert.equal(zigzag('PAYPALISHIRING', 5), 'PHASIYIRPLIGAN');
    assert.equal(zigzag('HAVEAGOODDAY', 6), 'HAADYVDEOAOG');
  });

  it('throws with non-string or non-number input', () => {
    assert.throws(() => zigzag(null, null));
    assert.throws(() => zigzag(null, 2));
    assert.throws(() => zigzag('asdfdsf', null));
    assert.throws(() => zigzag([], []));
    assert.throws(() => zigzag({}, {}));
    assert.throws(() => zigzag([], {}));
    assert.throws(() => zigzag({}, []));
    assert.throws(() => zigzag(true, false));
    assert.throws(() => zigzag(false, false));
    assert.throws(() => zigzag(true, true));
    assert.throws(() => zigzag(false, true));
    assert.throws(() => zigzag(false, 2));
    assert.throws(() => zigzag(true, 2));
    assert.throws(() => zigzag('ssdfdsafddsa', true));
    assert.throws(() => zigzag('ssdfdsafddsa', false));
  });

  it('throws with missing input', () => {
    assert.throws(() => zigzag());
  });
});
