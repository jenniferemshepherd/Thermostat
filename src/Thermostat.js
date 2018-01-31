function Thermostat() {
  this.temperature = 20;
  const minTemp = 10;
  this.isPowersaving = true
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

Thermostat.prototype.modeSwitch = function() {
  if (this.isPowersaving) {
    this.isPowersaving = false
  } else {
    this.isPowersaving = true
  }
};
