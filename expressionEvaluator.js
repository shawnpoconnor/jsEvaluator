function Evaluator() {
}
Evaluator.prototype.evaluate = function(userString) {
  var parsedArr = parseUserString(userString);

  return condense(parsedArr);
}

var condense = function(arr) {

  var operator = arr[0];
  var firstInt = arr[1];

  var partialApplication = math('+', 1);

  return partialApplication(2);

  // if(firstChar === '+') {
  //   return parseInt(charArr[1]) + evalString.slice(1, (evalString.length));
  // }else if (firstChar === '-') {
  //   // return evalString[1] - evalString[2]
  // }else {
  //   return parseInt(firstChar);
  // }
}

var math = function(operator, num1) {
  return function(num2) {
    if(operator === '+') {
      return num1 + num2;
    }else {
      return num1 - num2;
    }
  }
}



var parseUserString = function(userString) {
  var parsedArr = userString.split(" ")
    .map(x =>
      {
      if(x === '+' || x === '-') {
          return x;
        }else {
          return parseInt(x);
        }
    });
    return parsedArr;
}

module.exports = Evaluator;
