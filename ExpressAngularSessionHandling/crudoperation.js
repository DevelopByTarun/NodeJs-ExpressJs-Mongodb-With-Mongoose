var dbOperations= {

 addUser:function(data,response){
var User = require("./schemadefine");
User.create(data,function(error,result){
    
     //User.create({"name":"Ram","phone":[2222,3333],"address":[{"state":"Delhi","pincode":2222},{"state":"Delhi","pincode":2222}]},function(error,response){
   if(error){
       response.json({"msg":"Can't Add Error Occured "});
   }
    else{
       response.json({msg:"Register SuccessFully..."});
   }
});
}
,
findUser:function (username){
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
}
module.exports =dbOperations; 
//findUser("Ram");
