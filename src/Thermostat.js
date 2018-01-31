function Thermostat() {
  this.temperature = 20;
  this.MAXTEMP = 32;
  this.MINTEMP = 10;
  this.PSMAXTEMP = 25;
  this.isPowersaving = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
};


Thermostat.prototype.up = function(number) {
  if (this.temperature + number > this.MAXTEMP) {
    throw new Error(`maximum temperature is ${this.MAXTEMP}`)
  }
  if (this.isPowersaving && (this.temperature + number > this.PSMAXTEMP)) {
    throw new Error(`maximum temperature is ${this.PSMAXTEMP} in powersave mode`)
  }
    this.temperature+=number
};

Thermostat.prototype.down = function(number) {
  if (this._isUnderMinTemp(number)) {
    throw new Error(`minimum temperature is ${this.MINTEMP}`)
  }
    this.temperature-=number
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

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return("low-usage")
  }
  if (this.temperature >= 18 && this.temperature < 25) {
    return("medium-usage")
  }
  return("high-usage")
};
