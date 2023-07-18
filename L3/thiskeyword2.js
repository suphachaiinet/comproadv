var name = "fatema";

function fun(){
    console.log(this.name)
}

const user = {
    name: "Marium",
    year0fBirth: 1999,
    calcAge: function(){
        const currentYear = (new Date()).getFullYear();
        return currentYear - this.year0fBirth;
    }
}

fun();
user.calcAge();
fun.call(user);