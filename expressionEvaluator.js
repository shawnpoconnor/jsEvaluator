function Evaluator() {
}
Evaluator.prototype.evaluate = function(userString) {
  var parsedArr = parseUserString(userString);

  return condense(parsedArr);
}

var condense = function(arr) {
  var firstElement = arr[0];

  if(firstElement != '+' && firstElement != '-') {
    return firstElement;
  }else {
    var operator = firstElement;
    var firstInt = arr[1];

    var partialApplication = math(operator, firstInt);
    return partialApplication(condense(arr.slice(2, (arr.length))));
  }
}

var math = function(operator, num1) {
  return function(num2) {
    if(operator === '+') {
      // console.log(num1, " ", num2)
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
