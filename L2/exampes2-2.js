function equation(str) {
    // แยกส่วนของตัวเลขและตัวดำเนินการ
    var numbers = str.split(/[+\-*/]/);
    var operators = str.match(/[+\-*/]/g);
    
    // ทำการคำนวณตามลำดับของตัวดำเนินการเอาเป็นหลัก
    var result = parseInt(numbers[0], 10);
    for (var i = 0; i < operators.length; i++) {
      var num = parseInt(numbers[i + 1], 10);
      var operator = operators[i];
      switch (operator) {
        case '+':
          result += num;
          break;
        case '-':
          result -= num;
          break;
        case '*':
          result *= num;
          break;
        case '/':
          result /= num;
          break;
      }
    }
    
    return result;
  }
  
  console.log(equation("1+1"));           // Output: 2
  console.log(equation("7*4-2"));         // Output: 26
  console.log(equation("1+1+1+1+1"));     // Output: 5