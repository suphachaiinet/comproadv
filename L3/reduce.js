const array0fNumbers = [1, 2, 3, 4];

const sum = array0fNumbers.reduce((accumlator, currentValue) => {
    return accumlator + currentValue;
});

console.log(sum);