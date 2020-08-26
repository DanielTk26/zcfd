
var express = require("express"); 
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);


memers = []; 
memeConnections = [];

server.listen(process.env.PORT || 2019);  


app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html"); 
	
});
	
io.sockets.on("connection", function(socket){
	//connection stuff
	memeConnections.push(socket);
	
	// disconnection stuff
	socket.on("disconnect", function(data){
		
		memers.splice(memers.indexOf(socket.username), 1); s
		
		
	memeConnections.splice(memeConnections.indexOf(socket),1);
	
	});
	
	
	socket.on("Post Your Donor Details", function(data){ 
		//console.log(data); 
		io.sockets.emit("Donor Details", {msg: data});
	});
});
