function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.up = function(number) {
  this.temperature+=number
};
