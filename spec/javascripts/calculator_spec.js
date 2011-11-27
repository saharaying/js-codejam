describe("Calculator", function() {
  var calculater = null;
  
  function clickOn(button) {
    $("button[value='" + button + "']").click();
  }
  
  beforeEach(function() {
    loadFixtures("calculator.html");
    calculator = Calculator($("#calculator"));
  });
  
  it("should be able to input the operand", function() {
    clickOn('1');
    expect($("#result").html()).toBe("1");
  });
  
  it("should be able to input the operand with multiple digits", function() {
    clickOn('1'); 
    clickOn('4');
    expect($("#result").html()).toBe("14");
  });
  
  it("should set operator", function() {
    clickOn('-');
    expect($("#operator").html()).toBe("-");
  });
  
  it("should clear the result when click on C", function() {
    clickOn('C');
    expect($("#result").html()).toBe('');    
    expect($("#operator").html()).toBe('');    
  });
  
  describe("basic operation", function() {
    it("should do subtraction", function() {
      clickOn('5');
      clickOn('-');
      clickOn('2');
      clickOn('=');
      expect($("#result").html()).toBe("3");
    });

    it("should do addition", function() {
      clickOn('5');
      clickOn('+');
      clickOn('2');
      clickOn('=');
      expect($("#result").html()).toBe("7");
    });

    it("should do multiple", function() {
      clickOn('5');
      clickOn('*');
      clickOn('2');
      clickOn('=');
      expect($("#result").html()).toBe("10");
    });

    it("should do division", function() {
      clickOn('5');
      clickOn('/');
      clickOn('2');
      clickOn('=');
      expect($("#result").html()).toBe("2.5");
    });    
  });

  // TODO
  // it("should start new expression after evaluation", function() {
  //   clickOn('1');
  //   clickOn('+');
  //   clickOn('4');
  //   clickOn('=');
  //   clickOn('3');
  //   expect($('#result').html()).toBe('3');
  // });
});