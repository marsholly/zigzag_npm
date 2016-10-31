const assert = require('chai').assert;

const zigZag = require('./');

describe('zigZag', () => {
  it('ZIGZAG THE STRING INTO N ROWS AND CONCATANATE ALL ROWS', ()=> {
    assert.equal(zigZag('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
    assert.equal(zigZag('HAVEAGOODDAY', 4), 'HOAGOYVADAED');
    assert.equal(zigZag('PAYPALISHIRING', 5), 'PHASIYIRPLIGAN');
    assert.equal(zigZag('HAVEAGOODDAY', 6), 'HAADYVDEOAOG');
  });

  it('throws with non-string or non-number input', () => {
    assert.throws(() => zigZag(null, null));
    assert.throws(() => zigZag(null, 2));
    assert.throws(() => zigZag('asdfdsf', null));
    assert.throws(() => zigZag([], []));
    assert.throws(() => zigZag({}, {}));
    assert.throws(() => zigZag([], {}));
    assert.throws(() => zigZag({}, []));
    assert.throws(() => zigZag(true, false));
    assert.throws(() => zigZag(false, false));
    assert.throws(() => zigZag(true, true));
    assert.throws(() => zigZag(false, true));
    assert.throws(() => zigZag(false, 2));
    assert.throws(() => zigZag(true, 2));
    assert.throws(() => zigZag('ssdfdsafddsa', true));
    assert.throws(() => zigZag('ssdfdsafddsa', false));
  });

  it('throws with missing input', () => {
    assert.throws(() => zigZag());
  });
});
