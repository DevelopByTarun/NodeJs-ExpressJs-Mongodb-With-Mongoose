var chalk = require("chalk");
var fs = require("fs");

var readableStream = fs.createReadStream("demo.txt");
var writeableStream = fs.createWriteStream("writepipe.ejs");
readableStream.pipe(writeableStream);
console.log(chalk.bgBlue("file ended...."));