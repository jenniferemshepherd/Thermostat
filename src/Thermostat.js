function Thermostat() {
  this.temperature = 20;
  const minTemp = 10;
  this.isPowersaving = true
};

Thermostat.prototype.up = function(number) {
    this.temperature+=number
};

Thermostat.prototype.down = function(number) {
  if (this._isUnderMinTemp(number)) {
    throw new Error("minimum temperature is 10")
  } else {
    this.temperature-=number
  }
};

Thermostat.prototype.modeSwitch = function() {
  if (this.isPowersaving) {
    this.isPowersaving = false
  } else {
    this.isPowersaving = true
  }
};

Thermostat.prototype._isUnderMinTemp = function(number) {
  return ((this.temperature - number) <= 10)
};
