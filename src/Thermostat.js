function Thermostat() {
  this.temperature = 20;
  const minTemp = 10;
};

Thermostat.prototype.up = function(number) {
    this.temperature+=number
};

Thermostat.prototype.down = function(number) {
  if ((this.temperature - number) >= 10) {
    this.temperature-=number
  } else
    throw new Error("minimum temperature is 10")
};
