class Dog {
    constructor(name){
        this._name = name;
    }
    introduce(){
        console.log("This is " + this._name + "!" );
    }
    //A static method
    static bark(){
        console.log("woof!");
    }
    static park(){
        console.log("boooo!")
    }
}

const myDog = new Dog("Buster");
myDog.introduce();
//calling the static method
Dog.bark();
Dog.park();
