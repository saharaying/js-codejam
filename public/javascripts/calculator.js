var Calculator = function($container) {
  var $calculator = $container;
  var operators = ['+', '-', '*', '/'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var expression = Expression();
  var cachedOperant = '';
  
  function bindClickOn(buttons, onClick) {
    $.each(buttons, function(i, button) {
      $calculator.find("button[value='" + button + "']").click(function() {
        onClick($(this).val());
      })
    });
  }
  
  function getDisplayedResult() {
    return $calculator.find('#result').html();
  }
  
  function clearCachedOperant() {
    cachedOperant = '';
  }
  
  function displayOperator(value) {
    $calculator.find('#operator').html(value);
  }
  function displayResult(value) {
    $calculator.find('#result').html(value);
  }
  
  function bindOperant() {
    bindClickOn(numbers, function(value) {
      displayResult(cachedOperant += value);
    });
  }
  
  function saveOperant() {
    clearCachedOperant();
    expression.setOperant(parseFloat(getDisplayedResult()));    
  }
 
  function bindOperator() {
    bindClickOn(operators, function(value) {
      saveOperant();
      displayOperator(value);
      expression.setOperator(value);
    });
  }
  
  function bindClear() {
    bindClickOn('C', function() {
      clearCachedOperant();
      expression.clear();
      displayOperator(null);
      displayResult(null);
    });    
  }
  
  function bindEvaluate() {
    bindClickOn('=', function() {
      saveOperant();
      displayResult(expression.evaluate());     
      expression.clear();
    });
  }
  
  bindOperant();
  bindOperator();
  bindEvaluate();
  bindClear();
}