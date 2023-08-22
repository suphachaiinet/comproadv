function totalVolume(...boxes){
    let totalVolume = 0
    for (let box of boxes) {
        let volume = 1
        
        for (let side of box){
            volume *= side;
        } 
        totalVolume += volume
    }
    return totalVolume
}






console.log(totalVolume([4 , 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])) // output 63
console.log(totalVolume([2 , 2, 2], [2, 1, 1])) // output 10
console.log(totalVolume([1 , 1, 1])) // output 1

