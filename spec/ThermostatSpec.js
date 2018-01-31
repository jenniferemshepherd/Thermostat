describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has an initial temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe("changes temperature", function() {

    it("can increase the temperature", function() {
      thermostat.up(2)
      expect(thermostat.temperature).toEqual(22);
    });

    it("can decrease the temperature", function() {
      thermostat.down(2)
      expect(thermostat.temperature).toEqual(18);
    });

    it("will not decrease the temperature if it would result in lower than the min temperature", function() {
      expect(function() { thermostat.down(12) }).toThrow(new Error("minimum temperature is 10"))
    });

    it("will not increase the temperature beyond 32 degrees", function() {
      expect(function() { thermostat.up(13) }).toThrow(new Error("maximum temperature is 32"))
    });

    it("can reset the temperature", function() {
      thermostat.up(2)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("power save mode", function() {

    it("is on by default", function() {
      expect(thermostat.isPowersaving).toBeTruthy()
    });

    it("can be switched off", function() {
      thermostat.modeSwitch()
      expect(thermostat.isPowersaving).toBeFalsy()
    });

    it("can be switched on", function() {
      thermostat.modeSwitch()
      thermostat.modeSwitch()
      expect(thermostat.isPowersaving).toBeTruthy()
    });

    it("won\'t increase beyond 25 if isPowersaving is true", function() {
      expect(function() { thermostat.up(6) }).toThrow(new Error("maximum temperature is 25 in powersave mode"))
    });

  });

  describe("energy usage", function() {
    it("returns low-usage if temperature is below 18", function() {
      thermostat.down(4)
      expect(thermostat.usage()).toEqual("low-usage")
    });

    it("returns medium-usage if temperature is between 18 and 24", function() {
      expect(thermostat.usage()).toEqual("medium-usage")
    });

    it("returns high-usage if temperature is above 24", function() {
      thermostat.modeSwitch()
      thermostat.up(8)
      expect(thermostat.usage()).toEqual("high-usage")
    });
  });

});
