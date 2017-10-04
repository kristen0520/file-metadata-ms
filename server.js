var fs = require("fs");
var path = require("path");

var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 
var app = express()
 
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
var f =  req.file;
var size = f.size;
size = {"size": size}
//file = JSON.stringify(file);
res.send(size);
res.end();



/*fs.readFile("./uploads" + file, function(err, data){
	if(err){return err}
	
    res.write(data);

})   */
})



app.get("/", function(req, res){
	//res.send('./index.html');
	fs.readFile("./index.html", null, function(err, data){
		if(err){res.writeHead(404);
				res.write('index file not found')}
		else{res.write(data);
			 res.end();}
	})	
})



app.listen(3000, console.log("app listening on port 3000"));