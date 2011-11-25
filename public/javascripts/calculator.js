var Calculator = function($container) {
  var $calculator = $container;
  var operators = ['+', '-', '*', '/'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var expression = [];
  var leftOperant = '';
  
  function bindClickOn(buttons, onClick) {
    $.each(buttons, function(i, button) {
      $calculator.find("button[value='" + button + "']").click(function() {
        onClick($(this).val());
      })
    });
  }
  
  function bindOperant() {
    bindClickOn(numbers, function(value) {
      leftOperant += value;
      displayResult(leftOperant);
    });
  }
  
  function bindOperator() {
    bindClickOn(operators, function(value) {
      expression.push(parseInt(leftOperant));
      displayOperator(value);
      leftOperant = '';
      expression.push(value);
    });

    bindClickOn('C', function() {
      expression = [];
      displayOperator(null);
      displayResult(null);
    });
    
    bindClickOn('=', function() {
      expression.push(parseInt(leftOperant));
      switch(expression[1]) {
        case '+': 
          result = expression[0] + expression[2];
          break;
        case '-': 
          result = expression[0] - expression[2];
          break;
        case '*': 
          result = expression[0] * expression[2];
          break;
        case '/': 
          result = expression[0] / expression[2];
      }
      displayResult(result);
      expression = [result];      
    });
  }
  
  function displayOperator(value) {
    $calculator.find('#operator').html(value);
  }
  function displayResult(value) {
    $calculator.find('#result').html(value);
  }
  
  bindOperant();
  bindOperator();
}