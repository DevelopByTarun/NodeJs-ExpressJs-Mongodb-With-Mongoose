const express = require("express");
var router = express.Router();
router.get("/welcome",(req,res)=>{
res.send("Hello User");
});
router.post('/login',(req,res)=>{
	
	console.log(req);
	if(req.body.userid==req.body.pwd){
		var type = req.body.type;
		var menuOptions = menu(type);
		res.render('welcome',{ userid: req.body.userid, menuOptions:menuOptions });
	}
	else{
		res.send("Invalid Userid or Password");
	}
	//res.send("Welcome User "+req.body.userid);
});
function menu(type){
	if(type=='A'){
		return [{name:'Add New User',link:'add.html'},{name:'Delete User',link:'delete.html'}];
			
	}
	else
	if(type=='G'){
		return [{name:'View User',link:'view.html'}];
			
	}
	else
	if(type=='C'){
		return [{name:'View User',link:'view.html'},{name:'Add New User',link:'add.html'}];
		
	}	

}
router.post("/register",(req,res)=>{
	res.send("Register Code");
});


router.post("/mail",(req,res)=>{
	var smtpTransport = require('nodemailer-smtp-transport');
	var sender = req.body.sender;
	var rec = req.body.rec;
	var content = req.body.content;
	console.log("Sender "+sender);
	console.log("Rec "+rec);
	console.log("Content "+content);
	const nodemailer = require('nodemailer');
	let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'anmolchopra123@gmail.com',
        pass: 'anmolchopra'
    }
});
let mailOptions = {
    from: '"Anmol Chopra 👻" <anmolchopra123@gmail.com>', // sender address
    to: rec, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: content, // plain text body
    html: '<b>'+content+'</b>' // html body
};
	
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
	res.send('Mail Send SuccessFully');
    console.log('Message %s sent: %s', info.messageId, info.response);
});	
	
});
module.exports = router;