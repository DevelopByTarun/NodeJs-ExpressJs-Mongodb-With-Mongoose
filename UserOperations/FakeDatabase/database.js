function prepareUsers() {
    var User = require("../View/User");
    var users = [];
    for(var i = 0; i < 5; i++) {
        var userObject = new User("tarun"+i, "222"+i);
        users.push(userObject);
    }
    return users;
}
function isUserExist(userObject) {
    var users = prepareUsers();
    var subUsers = users.filter((user)=> {
        return user.userid == userObject.userid && user.password == userObject.password;
    });
    return subUsers.length > 0?true:false;
}
module.exports = isUserExist;