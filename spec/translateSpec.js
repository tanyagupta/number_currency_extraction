const test_code = require('../number_currency_extractor');


describe("We want to make sure the new translate works the same", function() {
  it("the old translate", function() {
    expect(test_code.translate('122,23')).toEqual("122.23");
    expect(test_code.translate('122')).toEqual("122");
    expect(test_code.translate('123.456.789,01')).toEqual("123,456,789.01");
    expect(test_code.translate('12,0')).toEqual("12.0");


  });

  it("the new regeex based translate", function() {
    expect(test_code.new_translate('122,23')).toEqual("122.23");
    expect(test_code.new_translate('122')).toEqual("122");
    expect(test_code.new_translate('123.456.789,01')).toEqual("123,456,789.01");
    expect(test_code.new_translate('12,0')).toEqual("12.0");


  });



});
