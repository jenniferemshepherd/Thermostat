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


Thermostat.prototype.up = function() {
  if (!this.isPowersaving && this._isMaxTemp()) {
    return
  }
  if (this.isPowersaving && this._isPSMaxTemp()) {
    return
  }
    this.temperature+=1
};

Thermostat.prototype.down = function() {
  if (this._isMinTemp()) {
    return
  }
    this.temperature-=1
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
