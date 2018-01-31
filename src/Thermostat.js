function Thermostat() {
  this.temperature = 20;
  this.MAXTEMP = 32;
  this.MINTEMP = 10;
  this.PSMAXTEMP = 25;
  this.isPowersaving = true;
};

Thermostat.prototype.up = function(number) {
  if (this.temperature + number > this.MAXTEMP) {
    throw new Error(`maximum temperature is ${this.MAXTEMP}`)
  }
  if (this.isPowersaving && (this.temperature + number > this.PSMAXTEMP)) {
    throw new Error(`maximum temperature is ${this.PSMAXTEMP}`)
  }
    this.temperature+=number
};

Thermostat.prototype.down = function(number) {
  if (this._isUnderMinTemp(number)) {
    throw new Error(`minimum temperature is ${this.MINTEMP}`)
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
  return ((this.temperature - number) <= this.MINTEMP)
};
