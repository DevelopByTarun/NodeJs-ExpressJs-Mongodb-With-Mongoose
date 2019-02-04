// create class Calculate and his function
class Calculate {
    constructor(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }

    plus() {
        return this.num1 + this.num2;
    }

    minus() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }
}

// create Calculate class object
var calculateObject = new Calculate(200, 400);

// export modules
module.exports.myCalculate = calculateObject;