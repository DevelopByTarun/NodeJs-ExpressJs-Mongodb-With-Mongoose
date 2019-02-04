function User(userid,password,name,role){
	this.userid = userid;
	this.password = password;
	this.name = name;
	var rightData=[{name:"Admin",descr:"Admin Role"}];
	this.roles = [{name:role,rights:rightData}];
	
}
module.exports = User;
