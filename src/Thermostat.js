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

Thermostat.prototype._isMinTemp = function() {
  return (this.temperature === this.MINTEMP)
};

Thermostat.prototype._isMaxTemp = function() {
  return (this.temperature === this.MAXTEMP)
};

Thermostat.prototype._isPSMaxTemp = function() {
  return (this.temperature === this.PSMAXTEMP)
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
