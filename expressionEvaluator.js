var R = require('ramda');

function Evaluator() {
}

const condense = (arr) => {
  const firstElement = arr[0];

  if(firstElement != '+' && firstElement != '-') {
    return firstElement;
  }else {
    const operator = firstElement;
    const firstInt = arr[1];

    const partialApplication = math(operator, firstInt);
    return partialApplication(condense(arr.slice(2, (arr.length))));
  }
}

const math = R.curry(function(operator, num1, num2) {
    if(operator === '+') {
      return num1 + num2;
    }else {
      return num1 - num2;
  }
});

const parseUserString = (userString) => {
  const parsedArr = userString.split(" ")
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

Evaluator.prototype.evaluate = R.compose(condense, parseUserString);

module.exports = Evaluator;
