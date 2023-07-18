const array = [15, 16, 17, 18, 19];

function reducer(accumlator, currentValue, index){
    const returns = accumlator + currentValue;
    console.log(
        `accumulator: ${accumlator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}
array.reduce(reducer)