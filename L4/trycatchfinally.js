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