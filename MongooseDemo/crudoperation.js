
function addUser(){
var User = require("./schemadefine");
User.create({"name":"Ram","phone":[2222,3333],"address":[{"state":"Delhi","pincode":2222},{"state":"Delhi","pincode":2222}]},function(error,response){
   if(error){
       console.log("Can't Add Error Occured ",error);
   }
    else{
       console.log("Record Added...");
   }
});
}

function findUser(username){
    var User = require("./schemadefine");
    User.find({"name":username},function(error,docs)
    {
   if(error){
       console.log("Record Not Found ",error);
   }
    else{
       console.log(docs);
   }
});
}

findUser("Ram");
