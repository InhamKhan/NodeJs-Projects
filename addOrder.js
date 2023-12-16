var express = require("express");
var eSession = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var path = require("path");
var ejs = require("ejs");
var helper = require("./addmissionServer");
const addmisionSchema = require("./addmissionSchema");
const { dirname } = require("path");
const { dir } = require("console");

var myServer = express();
myServer.use(eSession({ secret: "ssshhhh", saveUninitialized: true, resave: true}));
myServer.use(bodyParser.urlencoded({extended: true}));
myServer.use(cors({ origin: "*"}));

myServer.set("views", __dirname);
myServer.set("view engine", "ejs");




myServer.get("/addmission.htm",function(request, response){
    console.log("recived request from addmission.htm");
    response.sendFile(__dirname + "/addmission.html");
});


myServer.get("/showAddmission.htm", function (request, response) {
    console.log("recived reuqest for /showAddmission.htm");
    response.sendFile(__dirname + "/addmission.html");
  });

myServer.post("/addmission.htm", helper.addAddmission);
myServer.post("/updateAddmission.htm", helper.updateAddmission);

myServer.get("/deleteAddmission.htm", helper.deleteAddmission);

myServer.get("/editAddmission.htm", helper.getAddmissionById);
myServer.get("/listAddmission.htm", helper.listAddmission);

myServer.get("/searchUsers", helper.searchUsers);

myServer.get("*.css", function(request, response){
    let spath =  __dirname + request.path;
    console.debug("css file: "+spath);
    response.contentType(path.basename(spath));
    response.sendFile(spath);
});
myServer.get("*.js", function(request, response){
    let spath = __dirname + request.path;
    console.debug("JS file: "+spath);
    response.contentType(path.basename(spath));
    response.sendFile(spath);
});

var server = myServer.listen(8080, initFunction);

function initFunction(){
var post = server.address().port;
var host = server. address().address;

console.log("host =" + host + "" + post); 
 }