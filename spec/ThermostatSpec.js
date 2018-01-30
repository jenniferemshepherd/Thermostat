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



  });


});
