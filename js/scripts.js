var gallons = parseFloat(prompt("Enter a number of gallons:"));

var Conversion = function(gallons) {
  return gallons * 3.785;
};

alert("this is the number of liters: " + Conversion(gallons));
