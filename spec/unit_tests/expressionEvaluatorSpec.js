describe("Test the expressionEvaluator function", function() {
  var Evaluator = require('../../expressionEvaluator.js');

  beforeEach(function(){
    evaluator = new Evaluator();
  });

  it("should return a single number", function() {
    expect(evaluator.evaluate('4')).toEqual(4);
  });

  it("should add two numbers togather", function() {
    expect(evaluator.evaluate('+ 1 2')).toEqual(3);
  });

    it("should subtract two numbers", function() {
    expect(evaluator.evaluate('- 3 1')).toEqual(2);
  });

  it("should add three numbers togather", function() {
    expect(evaluator.evaluate("+ 1 + 2 3")).toEqual(6);
  });

  it("should subtract three numbers", function() {
    expect(evaluator.evaluate("- 5 - 3 2")).toEqual(4);
  });

  it("should add multiple levles of nested addition", function() {
    expect(evaluator.evaluate("+ 1 + 2 + 3 1")).toEqual(7);
  });

  it("should be able to deal with both addition and subtraction in the same string", function() {
    expect(evaluator.evaluate("- 5 + 1 3")).toEqual(1);
  });

  it("should be able to deal with both multiple of addition and subtraction in the same string", function() {
    expect(evaluator.evaluate("- 6 + 1 + 2 - 3 1")).toEqual(1);
  });



});
