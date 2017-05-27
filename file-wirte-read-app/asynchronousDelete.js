var fs=require("fs")
var filepath='./sample2.txt';
   
   console.log("Start Reading File")
   console.log("============= ")
   console.log("\n")
	fs.readFile(filepath,function(err,data){

			if(err){

				console.log(err)
			}
			console.log(data.toString())

			console.log("\n")
			
			console.log("\n")
            console.log("Start Writing ")
            console.log("============= ")
            console.log("\n")
			fs.writeFile('./update2.txt',data,function(err,data){

				if (err) {
					throw err;
		console.log(err)
				}
				//console.log(data.toString())
			})


			fs.unlink('./file_for_delete2.txt',function(err){
        if(err) 
        	return console.log(err);
        console.log('file deleted successfully');
   }); 

	})
     
     
	


	