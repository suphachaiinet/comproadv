function criticalCode(){
    throw "thowing an exception";
}

function logError(theExeption){
    console.log(theExeption);
}

//try..Catch
console.log("\n****Try..Catch****\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error!!!!!!!!!!!!!!");
    logError(ex);
}

//Throwing in Try..Catch
console.log("\n****Throwing in Try..Catch****\n");
try{
    throw "An excrption thst id thrown every tine";
}
catch(ex){
    console.log("Got an erorr!!!!!!!!!!!!!!");
    logError(ex);
}

//Try..Catch..Finally
console.log("\n****Try..Catch..Finally****\n");
try{
    criticalCode();
}
catch(ex){
    console.log("Got an error");
    logError(ex);
}
finally{
    console.log("Code that always will run");
}
function hello(){
    console.log("\n****Thorwing Exceptions")
}