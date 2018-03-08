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

  it("should add three numbers togather", function() {
    expect(evaluator.evaluate("+ 1 + 2 3")).toEqual(6);
  });

});
