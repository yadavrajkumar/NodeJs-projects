var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({

				_id : {

					type : Number,
					required : true
				},


				name : {

					type : String,
					required :true
				},


				salary : {
                 
                 type : Number,
                 required : true

				},

				
				Address : {

								city : { 

									type : String,
									required : true

								},

								state : {
			                             
	                                      type : String,
	                                      required : true

								},


								country : {

									type : String,
									required : true
								}
				}

});

var userData = module.exports = mongoose.model("userModel",UserSchema,"user");

   module.exports.getUserDetails = function(userCallback){


   	   return userData.find(userCallback)
   }

   module.exports.createUser = function(userObj,userCallback){


   	return userData.create(userObj,userCallback)
   }