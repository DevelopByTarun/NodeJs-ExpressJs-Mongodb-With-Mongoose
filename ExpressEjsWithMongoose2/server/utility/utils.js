const getPath = function(currentPath){
	var path = require("path");
	var newPath = path.join(__dirname,currentPath);
	console.log("Current Path is "+__dirname+" New path is "+newPath);
	return newPath;
}
module.exports = getPath;