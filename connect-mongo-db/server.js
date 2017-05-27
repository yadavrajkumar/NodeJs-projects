var express = require("express");
var app = express();
var router =  express.Router();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var EmployeeRef = require("./model/employee");
 

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended : true}))


mongoose.connect("mongodb://localhost/techminds",function(){


	console.log("you have successfully connected with mongoose db")
})
 
router.get("/employee",function(request,response){

	EmployeeRef.getEmployee(function(error,empData){

          if (error) {

          	throw error;

          }                           
        
     response.json(empData)

	})

})

router.post("/employees",function(request,response){
   
 var empObj = request.body;
EmployeeRef.createEmployee(empObj,function(err, empData){

    if (err) {

console.log("Error details "+err)
			throw err;

		}
		response.json(empData)
      })
		
})



app.use("/api",router)
var PORT = process.env.PORT || 2020;
app.listen(PORT,function(){


	console.log("server listening at port no "+PORT)
})
