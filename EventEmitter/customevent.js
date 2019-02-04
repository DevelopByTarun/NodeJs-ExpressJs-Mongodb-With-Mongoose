// declare of events
const chalk = require('chalk');
const events = require('events');
var em = new events.EventEmitter();

// create function
function getData() {
    console.log(chalk.blue("This is custom event.js"));
}

// bind event
em.on("click", getData);

// fire event
em.emit("click");

// another event
function getData2(add) {
    console.log(chalk.bgRed("this is called :: " + add));
}

// bind 2nd event and fire
em.on("click2", getData2);
em.emit("click2", "event emitters of nodejs");

// another process

var fs = require("fs");
fs.readFile("file1.txt", (err, data) => {
    if (err) {
        console.log("file doesn't exist");
    } else {
        console.log(data.toString());
    }
});

var s = 100;
var t = 200;
console.log("Sum is " + (s + t));