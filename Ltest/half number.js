//numberSplit(4)=>[2,2]
//numberSplit(10)=>[5,5]
//numberSplit(11)=>[5,6]
//numberSplit(-9)=>[-5,-4]
function numberSplit(num){
    if (num >= 0 ) {
        const half = Math.floor(num / 2)
        return num - half
    }else{
        
    }

}
console.log(numberSplit(4));   // Output: [2, 2]
console.log(numberSplit(10));  // Output: [5, 5]
console.log(numberSplit(11));  // Output: [5, 6]
console.log(numberSplit(-9));  // Output: [-5, -4]