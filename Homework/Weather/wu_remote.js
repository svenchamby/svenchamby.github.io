// Current Location Scripts
$(function () {
	var status = $('#status');
	(function getGeoLocation() {
		status.text('Getting Location...');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var lat = position.coords.latitude;
				var long = position.coords.longitude;
				// Call the getData function, send the lat and long
				getData(lat, long);
			});
		}
		else {
			status.text("Your browser doesn't support Geolocation or it is not enabled!");
		}
	})();
	// Get the data from the wunderground API
	function getData(lat, long) {
		$.ajax({
			url: "https://api.wunderground.com/api/7934384e1fd2c586/geolookup/conditions/q/" + lat + "," + long + ".json"
			, dataType: "jsonp"
			, success: function (data) {
				console.log(data);
				// data from WU
				var city = data['location']['city'];
				var state = data['location']['state'];
				var temp = data['current_observation']['temp_f'];
				var direction = data['current_observation']['wind_dir'];
				var wind = data['current_observation']['wind_gust_mph'];
				var summary = data['current_observation']['weather'];
				var icon = data['current_observation']['icon_url'];
				var precip = data['current_observation']['precip_today_in'];
				// elements in page
				var cur_location = $('#location');
				var cur_temp = $('#temps');
				var wind_dir = $('#direction');
				var wind_speed = $('#wind')
				var cur_sum = $('#summary');
				var cur_precip = $('#precip');
				// change elements to
				$("title").prepend(city + ", " + state + " | ");
				cur_location.text(city + ", " + state);
				cur_temp.html(temp + "ºF").css("font-size", "3em");
				wind_dir.append(direction);
				wind_speed.append(wind + " mph");
				cur_sum.html(summary);
				cur_precip.append(" " + precip + " in.")
				$("#icon").attr("src", icon);
			}
		});
	}
	// A function for changing a string to TitleCase
	function toTitleCase(str) {
		return str.replace(/\w+/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
});
