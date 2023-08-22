//A Simple Pair
function simplepiar (arr , target){
    const modifiedArray = [];
    const remainder = target % 3;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== remainder) {
            modifiedArray.push(arr[i]);
        }
    }

    if (modifiedArray.length === 0) {
        return null;
    }

    return modifiedArray;
}


console.log(simplepiar[1, 2, 3], 3) // output [1 ,3]
console.log(simplepiar[1, 2, 3], 6) // output [2 ,3]
console.log(simplepiar[1, 2, 3], 9) // output null