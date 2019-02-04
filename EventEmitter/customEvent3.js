// declare of events
const chalk = require('chalk');
const events = require('events');

function LoopProcesser(num) {
    var em = new events.EventEmitter();
    setTimeout(function() {
        for (var i = 1; i <= num; i++) {
            em.emit("BeforeProcess", i);
            console.log(chalk.bgGreen.black.bold.inverse("processing number :: " + i));
            em.emit("AfterProcess", i);
        }
    }, 2000)
    return em;
}

function one(data) {
    console.log(chalk.bgRed.black.bold.underline("about to start the process for :: " + data));
}

function two(data) {
    console.log(chalk.bgBlue.black.bold.underline("completed processing :: " + data));
}
var call = LoopProcesser(6);
call.on("BeforeProcess", one);
call.addListener("AfterProcess", two);