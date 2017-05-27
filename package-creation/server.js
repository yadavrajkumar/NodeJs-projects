var express = require("express")
var app = express();
var router =express.Router();

app.get("/",function(request,response){


	response.json({message: "Hello Bengaluru !!"})


})


router.get("/user",function(request,response){
	response.json({message:"This is user endpoint"})

})
router.get("/customer",function(request,response){
	
	var customer={

		id:101,
		name:"john",
		salary:5000
	
}
	response.json({customer})
})
app.use("/api",router)

var PORT = process.env.PORT || 2017

app.listen(PORT,function(){

	console.log("Server Listning at 2017 PORT !!")
})