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

  });

});
