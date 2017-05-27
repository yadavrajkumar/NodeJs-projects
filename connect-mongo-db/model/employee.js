
var mongoose = require("mongoose");
var employeeSchema = mongoose.Schema({
    name:{

    type : String,
	required : true
   
   }, 



   mob : {
     
        type : String,
        required : true
    } ,


     address : {

     	type : String,
     	required : true
     }

 });

var employeeDeta = module.exports=mongoose.
                     model("employeeModel",employeeSchema,
                     	   "employee");

module.exports.getEmployee = function(getData){


   return employeeDeta.find(getData);

}

module.exports.createEmployee = function(employeeObj,getData){

	return employeeDeta.create(employeeObj,getData);


}