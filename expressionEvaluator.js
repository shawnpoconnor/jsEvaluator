var R = require('ramda');

function Evaluator() {
}

const condense = (arr) => {
  const firstElement = arr[0];

  if(firstElement != '+' && firstElement != '-') {
    return firstElement;
  }else {
    const operator = firstElement
    const firstInt = arr[1]

    return math(operator, firstInt, condense(arr.slice(2, (arr.length))));
  }
}

const math = R.curry((operator, num1, num2) => {
    if(operator === '+') {
      return num1 + num2;
    }else {
      return num1 - num2;
  }
});

const ConvertIntCharsToInt = (char) => {
  if(char === '+' || char === '-') {
    return char;
  }else {
    return parseInt(char);
  }
}

const parseUserString = R.compose(R.map(ConvertIntCharsToInt), R.split(" "));

Evaluator.prototype.evaluate = R.compose(condense, parseUserString);

module.exports = Evaluator;
