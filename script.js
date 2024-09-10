// TODO: What is `this` referring to here?
// "this" refers to Window Object
console.log(this);

// TODO: What is `this` referring to here?
function helloThis() {
  // "this" refers to helloThis function
  console.log("Inside this function, this is " + this);
}

// TODO: What is `this` referring to here? What will be logged in the console?
var child = {
  age: 10,
  ageTenYears: function () {
    // "this" refers to the child object and output will be 20.
    console.log(this.age + 10);
  },
};

// TODO: What is `this` referring to here? What will be logged in the console?
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      // "this" refers to investor and answer will 5750
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: Call the `helloThis` function and the object methods to check results in the console
helloThis();
