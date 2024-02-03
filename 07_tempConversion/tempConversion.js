const convertToCelsius = function(num) {
  let cel = (num - 32) * (5/9);
  cel = Math.round(cel * 10) / 10;
  return cel;
};

const convertToFahrenheit = function(num) {
  let faran = (num * (9 / 5)) + 32;
  faran = Math.round(faran * 10) / 10;
  return faran
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
