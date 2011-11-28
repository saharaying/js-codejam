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
  
  function initOperantArea() {
    bindClickOn(numbers, function(value) {
      displayResult(cachedOperant += value);
    });
  }
  
  function updateOperant() {
    clearCachedOperant();
    expression.setOperant(parseFloat(getDisplayedResult()));    
  }
  
  function updateOperator(value) {
    displayOperator(value);
    expression.setOperator(value);
  }
 
  function initOperatorArea() {
    bindClickOn(operators, function(value) {
      updateOperant();
      updateOperator(value);
    });
  }
  
  function bindEvaluate() {
    bindClickOn('=', function() {
      updateOperant();
      displayResult(expression.evaluate());     
    });
  }
  
  function bindClear() {
    bindClickOn('C', function() {
      displayResult('');
      displayOperator(null);
      expression.clear();
    });    
  }
  
  initOperantArea();
  initOperatorArea();
  bindEvaluate();
  bindClear();
}