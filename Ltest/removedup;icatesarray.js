function removeDups(arr) {
    let uniqueArr = [];
    
    for (let item of arr) {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }
    
    return uniqueArr;
  }
  
  console.log(removeDups([1, 0, 1])); // output [1, 0]
  console.log(removeDups(["The", "big", "cat"])); // output ["The", "big", "cat"]
  console.log(removeDups(["john", "taylor", "john"])); // output ["john", "taylor"]
  