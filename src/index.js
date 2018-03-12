class SmartCalculator {
    constructor(initialValue) {
        this.str = initialValue;
    }
    add(value) {
        this.str = this.str + '+' + value;
        return this;
    }
    subtract(value) {
        this.str = this.str + '-' + value;
        return this;
    }
    multiply(value) {
        this.str = this.str + '*' + value;
        return this;
    }
    devide(value) {
        this.str = this.str + '/' + value;
        return this;
    }
    pow(value) {
        this.str = this.str + '**' + value;
        return this;
    }
    toString() {
        return eval(this.str);
    }
}

module.exports = SmartCalculator;
