function equation(str) {
    var result = eval(str);
    return result;
  }
  
  console.log(equation("1+1"));           // Output: 2
  console.log(equation("7*4-2"));         // Output: 26
  console.log(equation("1+1+1+1+1"));     // Output: 5