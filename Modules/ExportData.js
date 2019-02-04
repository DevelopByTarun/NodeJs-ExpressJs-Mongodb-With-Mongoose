class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
    subtract() {
        return this.x - this.y;
    }
    divide() {
        return this.x / this.y;
    }
    multiply() {
        return this.x * this.y;
    }
}

function myShow() {
    console.log('This Is Show');
}

var myObj = {
    input: () => {
        console.log('This Is Input');
    },
    output: () => {
        console.log('This Is Output');
    }
}
var calculaterObj = new Calculator(100, 200);

module.exports.calObj = calculaterObj;
module.exports.show = myShow;
module.exports.obj = myObj;