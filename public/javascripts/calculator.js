var Calculator = function($container) {
  var $calculator = $container;
  var operators = ['+', '-', '*', '/'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var expression = Expression();
  
  function bindClickOn(buttons, onClick) {
    $.each(buttons, function(i, button) {
      $calculator.find("button[value='" + button + "']").click(function() {
        onClick($(this).val());
      })
    });
  }
  
  function bindOperant() {
    bindClickOn(numbers, function(value) {
      operant = 10 * expression.currentOperant() + parseInt(value);
      displayResult(operant);
      expression.setOperant(operant);
    });
  }
  
  function bindOperator() {
    bindClickOn(operators, function(value) {
      displayOperator(value);
      expression.setOperator(value);
    });

    bindClickOn('C', function() {
      expression.clear();
      displayOperator(null);
      displayResult(null);
    });
    
    bindClickOn('=', function() {
      result = expression.evaluate();
      expression.clear();
      expression.setOperant(result);
      displayResult(result);     
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