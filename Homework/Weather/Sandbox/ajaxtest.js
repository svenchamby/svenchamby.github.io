jQuery(document).ready(function ($) {
	function ajaxFromLocalJson(locationToGrab) {
		$.ajax({
			url: "../javascript/weather.json"
			, dataType: "json"
			, success: function (data) {
				console.log(data);
				var location = data[locationToGrab]['City'];
				var state = data[locationToGrab]['State'];
				var temp_f = data[locationToGrab]['High'];
				console.log("The high for today in " + location + " is: " + temp_f);
				var cur_location = $("#location");
				var temp = $("#temp");
				var message = $("#message");
				cur_location.text(location + ", " + state);
				temp.text(temp_f);
				message.text("The high for today in " + location + " is " + temp_f + "ºF");
			}
		});
	}

	function ajaxFromApi() {
		$.ajax({
			url: "http://api.wunderground.com/api/7934384e1fd2c586/geolookup/conditions/q/IA/Cedar_Rapids.json"
			, dataType: "jsonp"
			, success: function (data) {
				console.log(data);
				var location = data['location']['city'];
				var temp_f = data['current_observation']['temp_f'];
				var cur_location = $("#location");
				var temp = $("#temp");
				var message = $("#message");
				var image = $("#image");
				cur_location.text(location);
				temp.text(temp_f + "ºF");
				message.text("The current temperature in " + location + " is " + temp_f + "ºF");
			}
		});
	}
	ajaxFromApi();
});
