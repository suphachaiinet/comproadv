let furniture = ['Table', 'Chairs','Couch']

var index = 0;

while(index < furniture.length){
    let text = furniture[index].split('')
    let i = 0
    while(i < text.length){
        console.log(text[i])
        i++;
    }
    index++;
}