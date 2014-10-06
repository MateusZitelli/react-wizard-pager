jest.autoMockOff();

describe('indexize', () => {
  var indexize = require('../indexize.js');
  
  it('add indexes in objects inside arrays', () => {
    var obj = {
      arr0: [
        { val0: 'teste' },
        { val1: 'teste' },
        {
          arr1: [
            {
              val3: 'teste'
            }
          ]
        }
      ]
    };

    indexize(obj);

    expect(obj.arr0[0].index).toBe(0);
    expect(obj.arr0[1].index).toBe(1);
    expect(obj.arr0[2].index).toBe(2);
    expect(obj.arr0[2].arr1[0].index).toBe(0);
  });
});
