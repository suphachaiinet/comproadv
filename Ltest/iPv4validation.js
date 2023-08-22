function isValidIP(ip){
    const parts = ip.split(".");

    if (parts.length !== 4) {
        return false;
    }
    return true;
}

console.log(isValidIP("1.2.3.4")) // true
console.log(isValidIP("1.2.3")) // false
console.log(isValidIP("1.2.3.4.6")) // false
console.log(isValidIP("123.45.67.89")) // true
console.log(isValidIP("123.456.78.90")) // false
console.log(isValidIP("123.045.067.089")) // false