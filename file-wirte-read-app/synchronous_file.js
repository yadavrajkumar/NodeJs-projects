var fs=require("fs")
var filepath='./sample.txt';

console.log("Start Reading File ")
console.log("==================")

var data = fs.readFileSync(filepath)

console.log(data.toString())

console.log("\n")

console.log("Done Reading File")
console.log("\n")
console.log("=================")
console.log("\n")
console.log("Start Writing File")
console.log("=================")
console.log("\n")
fs.writeFileSync('./update.txt',data)
console.log(data.toString())
console.log("\n")
console.log("=================")
console.log("\n")
console.log("Done Writing File")