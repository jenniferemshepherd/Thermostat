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
      thermostat.up()
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease the temperature", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(17);
    });

    it('has a minimum of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10);
    });


    it("will not increase the temperature beyond 32 degrees", function() {
      thermostat.modeSwitch()
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });

    it("can reset the temperature", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.up()
      }
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
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });

  });

  describe("energy usage", function() {
    it("returns low-usage if temperature is below 18", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.usage()).toEqual("low-usage")
    });

    it("returns medium-usage if temperature is between 18 and 24", function() {
      expect(thermostat.usage()).toEqual("medium-usage")
    });

    it("returns high-usage if temperature is above 24", function() {
      thermostat.modeSwitch()
      for (var i = 0; i < 7; i++) {
        thermostat.up();
      }
      expect(thermostat.usage()).toEqual("high-usage")
    });
  });

});
