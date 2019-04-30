export const getUserPosition = () => {
	return new Promise((resolve, reject) => {
		const  searchedOptionsPosition = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};
	
		function getCurrentPositionSuccess (pos) {
			const coordinates = pos.coords;
			const userCoordinatesPosition = {};
			userCoordinatesPosition.latitude = coordinates.latitude;
			userCoordinatesPosition.longitude = coordinates.longitude;

			resolve(userCoordinatesPosition)
		};
	
		function getCurrentPositionError (err) {
			reject(err);
		};
	
		navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionError, searchedOptionsPosition);
	
	});
};

export const getWeatherByCoord = (coord) => {
	return (
		fetch(`https://api.darksky.net/forecast/4be6c0f5f88eaa6030743feb90f18c3e/${coord.latitude},${coord.longitude}?units=ca`)
			.then(data => data.json())
	)
}