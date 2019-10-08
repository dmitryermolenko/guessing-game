class GuessingGame {
    constructor() {
    	this.minNumber = 0;
    	this.maxNumber = 0;
    	this.targetNumber = 0;
    }

    setRange(min, max) {
      this.minNumber = min;
      this.maxNumber = max;
      

    }

    guess() {
      this.targetNumber = Math.floor((this.maxNumber + this.minNumber) / 2);
      return this.targetNumber;
    }

    lower() {
      this.maxNumber = this.targetNumber;
    }

    greater() {
      this.minNumber = this.targetNumber;
    }
}

module.exports = GuessingGame;
