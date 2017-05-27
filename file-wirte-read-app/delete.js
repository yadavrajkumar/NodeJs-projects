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
console.log("Start deleting File ")
console.log("\n")
fs.unlinkSync("./file_for_delete.txt");
console.log("\n")
console.log("deleted succsses")