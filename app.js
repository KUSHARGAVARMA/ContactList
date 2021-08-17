// importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var path = require("path");
var cors =require("cors");

var app = express();

const route = require('./Routes/route');
// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');
//on connection
mongoose.connection.on('connected',()=>{
	console.log('connected to db')
});
mongoose.connection.on('error',(err)=>{
	if(err){
	console.log('error in db'+err);
	}
});
// port no



const port = 3000;
app.use(bodyparser.json());

app.use('/api',route);

//adding middleware
app.use(cors());


//static files
//app.use(express.static(path.join(_dirname,'public')));


//testing Server
app.get('/',(req,res)=>{
res.send("foobar");
});

app.listen(port,()=>{
	console.log("Server started at port:"+port);
});