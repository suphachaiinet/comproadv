// ติดตั้งแพ็กเกจ math.js ผ่าน npm หรือโหลดมาเก็บในไดเรกทอรีโปรเจกต์ของคุณก่อนใช้งาน
const math = require('mathjs');

function equation(str) {
  var result = math.evaluate(str);
  return result;
}

console.log(equation("1+1"));           // Output: 2
console.log(equation("7*4-2"));         // Output: 26
console.log(equation("1+1+1+1+1"));     // Output: 5