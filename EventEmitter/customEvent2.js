// declare of events
const chalk = require('chalk');
const events = require('events');
var em = new events.EventEmitter();

// first event
function firstEvent(fe) {
    console.log(chalk.bgWhite.black("this is " + fe));
}

// second event
function secondEvent(se) {
    console.log(chalk.bgYellow.red("this is " + se));
}

// bind and fire both events
em.addListener("first", firstEvent);
em.on("second", secondEvent);
em.emit("first", "first event of nodejs event emitters");
em.emit("second", "second event of nodejs event emitters");

// additional file read for async call
var fr = require("fs");
fr.readFile("file1.txt", (err, data) => {
    if (err) {
        console.log(chalk.bgGreen.black("error exist on file read"));
    } else {
        console.log(chalk.bgBlue.white(data.toString()));
    }
});