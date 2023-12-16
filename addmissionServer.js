var express = require("express");
var eSession = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var portSchema = require("./addmissionSchema.js");
const { response } = require("express");

//DB Connection...
mongoose.connect("mongodb://0.0.0.0:27017/Smart-Futur");
const mongoDb = mongoose.connection;
mongoDb.on("error", console.error.bind(console, "connection error"));
mongoDb.once("open", function () {
  console.log("connect with the DB");
});

function addAddmission(request, response) {
  console.log("()....");

  //values are Stored in the local variables..
  //var {name, age, grade, parents, email, national, place, dateBirth, religion} = request.body;
  //console.log("name = "+name+", age="+age+", grade="+grade", parents="+parents", national="+national", place="+place", dateBirth=+"dateBirth", religion="+relihgion");

  var FullName = request.body.name;
  var Age = request.body.age;
  var Grade = request.body.grade;
  var ParentsName = request.body.parents;
  var Email = request.body.email;
  var Nationality = request.body.national;
  var PlaceofBirth = request.body.place;
  var DateofBirth = request.body.dateBirth;
  var Religion = request.body.religion;

  let addmissionScehma = mongoose.model("addmissionRecord");

  let addmissionRecordJson = {
    name: FullName,
    age: Age,
    grade: Grade,
    parents: ParentsName,
    email: Email,
    national: Nationality,
    place: PlaceofBirth,
    dateBirth: DateofBirth,
    religion: Religion,
  };

  console.log("addmissionRecord =" + JSON.stringify(addmissionRecordJson));
  var temport = new addmissionScehma(addmissionRecordJson);

  //Saving The Record In DB
  try {
    console.log("Saving Addmision Record in DB");
    temport.save();
    console.log("Record of Addmisions are Saved in DB");
  } catch (error) {
    console.error(error);
    response.status(500);
    response.end(error);
  }

  //Send Response to User
  response.setHeader("Content_Type", "text/html");
  var result = `<html>    </title><body><p>  <h1>Addmission Record is Saved <br> Thanku for Applying online Submmision</h1><br><br></p></body></html>`;
  response.end(result);
  console.log("addAddmission().....");
}

async function updateAddmission(request, response) {
  console.log("updateAddmission()....");

  let addmissionInformation = mongoose.model("addmissionRecord");
  var doc_id = request.body.doc_id;

  var {name, age, grade, parents } = req.body;
  console.log("name = "+name+", age="+age+", grade="+grade);
  var FullName = request.body.name;
  var Age = request.body.age;
  var Grade = request.body.grade;
  var ParentsName = request.body.parents;
  var Email = request.body.email;
  var Nationality = request.body.national;
  var PlaceofBirth = request.body.place;
  var DateofBirth = request.body.dateBirth;
  var Religion = request.body.religion;

  let queryString = {
    _id: doc_id,
  };
  console.log("queryString = " + JSON.stringify(queryString));
  var addmissionRecordResult;
  try {
    console.log("Query addmisionRecod");
    addmissionRecordResult = await addmissionInformation.findOne(queryString);
    addmissionRecordResult.name = FullName;
    addmissionRecordResult.age = Age;
    addmissionRecordResult.garade = Grade;
    addmissionRecordResult.parents = ParentsName;
    addmissionRecordResult.email = Email;
    addmissionRecordResult.national = Nationality;
    addmissionRecordResult.place = PlaceofBirth;
    addmissionRecordResult.dateBirth = DateofBirth;
    addmissionRecordResult.religion = Religion;
    await addmissionRecordResult.save();
  } catch (error) {
    console.log(error);
    response.status(500);
    response.end(error);
  }
  console.log("updateAddmission = " + addmissionRecordResult);

  console.log("Content-Type", "text/html");
  var result = `<html>    smartFuture</title><body><p>Thanks....!  <h1>Addmission Record is updated and Saved <br> Thanku for Applying online Submmision</h1><br><br>Thanks for USing PaymentGateWay</p></body></html>`;
  console.log("updateAddmission()....");
}

async function deleteAddmission(request, response) {
  let addmissionInformation = mongoose.model("addmissionRecord");
  console.log("deleteAddmission Information...");
  var doc_id = request.query.doc_id;

  let queryString = {
    _id: doc_id,
  };
  console.log("queryString =" + JSON.stringify(queryString));
  var addmissionRecordResult;
  try {
    console.log("query from the DB");
    addmissionRecordResult = await addmissionInformation.findOne(queryString);
    await addmissionRecordResult.delete();
  } catch (error) {
    console.log(error);
    response.status(500);
  
    console.log("addmissonInformation = " + addmissionRecordResult);
    response.setHeader("Content-Type", "text/html");
    var result =
   `<html>    smartFuture</title><body><p>Thanks....!  <h1>Addmission Record is Deleted From <br> Thanku for Applying online Submmision</h1><br><br></p></body></html>`;
   response.end(result);
   console.log("delete addmissionRecord Data From the DB");
}
}
async function getAddmissionById(request, response){
  console.log("getAddmission ById...........");

   let addmissionInformation = mongoose.model("addmissionRecord");
   console.log("check::");
   var doc_id = request.body.doc_id;
   console.log(doc_id);

   let queryString ={
    _id: doc_id,
   };
   console.log("queryString =" + JSON.stringify(queryString));
   var addmissionRecordResult;
   try{
    console.log("Query From the DB");
  addmissionRecordResult = await addmissionInformation.findOne(queryString);
   }catch (error){
   response.status(500);
   }
   console.log("addmissionInformation = " + addmissionRecordResult);
   response.render("editAddmission", {addmissionInformation: addmissionRecordResult});
   console.log("ID IS End here....?");
}

async function listAddmission(request, response) {
  console.log("list Of Addmissions....");

  let addmissionRecord = mongoose.model("addmissionRecord");

  let queryString = {
    addmissionRecord_id: null,
  };
  var addmission;
  try {
    console.log("check the Addmisions List");
    addmission = await addmissionRecord.find();
  } catch (error) {
    console.log(error);
    response.status(500);
    response.end(error);
  }
  console.log("addmission= " + addmission);

  response.render("listAddmission" , { data: addmission });
  console.log("listAddmission............");
}
async function searchUsers (request, response){
  console.log("get addmissionrecords...");

  let addmissionInformation = mongoose.model("addmissionRecord");
  var searchName = request.query.name;

  try {
    const query = {
     name: searchName,
    };
  const foundRecords = await addmissionInformation.findOne(query);
  //response.contentType("text/plain");
  response.json(foundRecords);//string for show in row we add +""
} catch (error) {
  console.error("Error fetching admission records:",bodyParser.json);
  response.status(500);
}
};

module.exports = {
  addAddmission,
  updateAddmission,
  deleteAddmission,
  getAddmissionById,
  listAddmission,
  searchUsers,
};
