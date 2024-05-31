let myVar = 0;
let ladder = {
    up: function () {
        myVar++;
        return this;
    },
    down: function () {
        myVar--;
        return this;
    },
    showStep: function () {
        console.log(myVar);
        return this;
    },
};

ladder.showStep().up().up().down().showStep();
