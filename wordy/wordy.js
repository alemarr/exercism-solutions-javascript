const calculator = {
  plus: (a,b) => a + b,
  minus: (a,b) => a - b,
  multiplied: (a,b) => a * b,
  divided: (a,b) => a / b,
};

const validator = {
  isNumber: function (value) {
    return /\d+/.test(value);
  },
  isValidOperator: function(operator) {
    if (this.isNumber(operator)) {
      throw new Error('Syntax error');
    }
  },
  isSupportedOperation: function(operation) {
    if (!calculator[operation]) {
      throw new Error('Unknown operation');
    }
  },
  isSet: function(value) {
    if (value === undefined) {
      throw new Error('Syntax error')
    }
  },
  isValidQuestion: function(question) {
    if (question.length === 0) {
      throw new Error('Syntax error');
    }
  },
  validateOperation: function(operator) {
    this.isValidOperator(operator);
    this.isSupportedOperation(operator);
  },
  validateOperand: function(operand) {
    validator.isSet(operand);
    validator.isNumber(operand);
  },
  validateFullOperation: function(left, right, operator) {
    this.validateOperation(operator);
    this.validateOperand(left);
    this.validateOperand(right);
  }
};

const calculate = (left, right, operation) => {
  validator.validateFullOperation(left, right, operation);
  return calculator[operation](parseInt(left), parseInt(right));
};

const getEquationString = question => {
  question = question.replace(/What is|\?|by/gi, '');
  validator.isValidQuestion(question);
  return question.replace(/\s+/g, ' ').trim().split(' ');
};

export const answer = (question) => {
  let answer = 0, left, right, operation;

  const equation = getEquationString(question);
  left = parseInt(equation[0]);

  for (let i = 1; i < equation.length; i += 2) {
    operation = equation[i];
    right = equation[i+1];
    answer = calculate(left, right, operation);
    left = answer;
  }

  if (!answer) {
    answer = parseInt(equation[0]);
  }

  return answer;
};