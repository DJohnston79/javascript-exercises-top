const convertToCelsius = function(degrees) {
  return Math.floor(5 / 9 * (degrees - 32));
};

const convertToFahrenheit = function(degrees) {
  return Math.floor(degrees * (9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
