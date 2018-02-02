console.log("Atty helped with the JQuery")


$( document ).ready(function() {

  var thermostat = new Thermostat();
  $( "#power-saving-status" ).text(powerSave());
  updateTemperature();

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a0fdac35fa0270ba37d365ce536ec6c4&units=metric", function(data) {
    $('#outdoor-temperature').text(data.main.temp);
  });

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a0fdac35fa0270ba37d365ce536ec6c4&units=metric", function(data) {
     $('#weather-description').text(data.weather[0].description);
    });

  $( "#temperature-up" ).click(function() {
        thermostat.up()
        updateTemperature()
      });

  $( "#temperature-down" ).click(function() {
        thermostat.down()
        updateTemperature()
      });

  $( "#temperature-reset" ).click(function() {
        thermostat.reset()
        updateTemperature()
      });

  $( "#change-powersaving-mode" ).click(function() {
        thermostat.modeSwitch()
        $( "#power-saving-status" ).text(powerSave());
      });

  function updateTemperature() {
      $( '#temperature' ).text(thermostat.temperature);
    };

  function powerSave() {
    if (thermostat.isPowersaving) {
      return "saving the environment :)"
    } else {
      return "killing the environment :("
    }
  };

});


 // ).css("background-color", "blue");
