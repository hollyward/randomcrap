
var arguments = {
    first : process.argv[0],
    second : process.argv[1],
    third : process.argv[2]
}

console.log("For loop");
for (i=0;i<99;i++){
    if (process.argv[i] != undefined){
	console.log(process.argv[i])
    }
}
console.log("For..In");
var itr;
for (itr in arguments) {
    console.log( arguments[itr] );


}
