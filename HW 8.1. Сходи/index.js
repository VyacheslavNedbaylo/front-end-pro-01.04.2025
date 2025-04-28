//1//
let ladder = {
  currentStep: 0,

  up: function () {
    this.currentStep++;
  },

  down: function () {
    this.currentStep--;
  },

  showStep: function () {
    console.log(this.currentStep);
  },
};
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

//2//
let ladderPro = {
  currentStep: 0,

  up: function () {
    this.currentStep++;
    return this;
  },

  down: function () {
    this.currentStep--;
    return this;
  },

  showStep: function () {
    console.log(this.currentStep);
    return this;
  },
};

ladderPro.up().up().down().showStep(); 
