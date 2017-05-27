var express = require("express");
var app = express();
var mongoose =require("mongoose");
var router = express.Router();
var userRef = require("./models/user");
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
    

     mongoose.connect("mongodb://localhost/techminds",function(){


     	console.log("you have successfully connected with MONGODB !!")
     })

     router.get("/getuser",function(request,response){

	            userRef.getUserDetails(function(err,data){


	            	if(err){

	            		throw err;
	            	}

	            	response.json(data)
	            })
    })

 
     router.post("/createuser",function(request,response){

			     var userObj = request.body;

			     userRef.createUser(userObj,function(err,data){

			          if(err){

			          	throw err;
			          }

			          response.json(data);
			    
			     })

     }) 


 app.use("/api",router);

 var  PORT = process.env.PORT || 2000;

  app.listen(2020,function(){

  	console.log("Hi...  Server listening at port 2020");
  })  
