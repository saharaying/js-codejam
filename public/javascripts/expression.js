var Expression = function() {
  var leftOperant = 0;
  var rightOperant = 0;
  var operator;
  
  function evaluate() {
    switch(operator) {
      case '+': 
        result = leftOperant + rightOperant;
        break;
      case '-': 
        result = leftOperant - rightOperant;
        break;
      case '*': 
        result = leftOperant * rightOperant;
        break;
      case '/': 
        result = leftOperant / rightOperant;
    }
    clear();
    return result;
  }
  
  function setOperator(value) {
    operator = value;
  }
  
  function setOperant(value) {
    if(operator == null) {
      leftOperant = value;
    } else {
      rightOperant = value;
    }
  }
  
  function clear() {
    leftOperant = 0;
    rightOperant = 0;
    operator = null;
  }
  
  return {
    setOperant : setOperant,
    setOperator : setOperator,
    evaluate : evaluate,
    clear : clear
  }
}