var x = document.getElementById("geolocation-display");
		
		/**
		 * Gets the location
		 */
		function getLocation() {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition,showError);
			}
			else{
				x.innerHTML = "Geolocation is not supported by your browser";
			}
		}
		
		/**
		 * Displays the maps using the latitude/longitude values
		 */
		function showPosition(position) {
		
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			
			// display it in a text format
			x.innerHTML = "Latitude: " + lat + " Longitude: " + lon;
						
			// display it in a (static) map - image
			var latlon = lat + "," + lon;
			var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
			document.getElementById("geolocation-display-map").innerHTML = "<img src='"+img_url+"'>";
			
			// display it in an interactive map
			var latilong = new google.maps.LatLng(lat,lon);
			var mapholder = document.getElementById('geolocation-display-map-interactive');
			mapholder.style.height='250px';
			mapholder.style.width='250px';
			var mapOptions = {
				center:latilong,
				zoom:14,
				mapTypeId:google.maps.MapTypeId.ROADMAP,
				mapTypeControl:false,
				navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
			}	

			var map = new google.maps.Map(mapholder,mapOptions); // the map
			var marker = new google.maps.Marker({position:latilong, map:map, title:'You are here!'}); // the marker
			
		}
		
		/**
		 * Error handler
		 */
		function showError(error) {
			switch(error.code){
				case error.PERMISSION_DENIED:
					x.innerHTML = "User denied the request for geolocation.";
					break;
				case error.POSITION_UNAVAILABLE:
					x.innerHTML = "Location information is unavailable.";
					break;
				case error.TIMEOUT:
					x.innerHTML = "The request to get user location has timedout";
					break;
				case error.UNKNOWN_ERROR:
					x.innerHTML = "An unknwown error occurred.";
					break;
			}
		}
		