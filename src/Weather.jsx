import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
	const api_key = import.meta.env.VITE_API_KEY;
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=imperial`
			)
			.then(response => {
				setWeatherData(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<div>
			{Object.keys(weatherData).length > 0 ? (
				<>
					<h1>Weather in {capital}</h1>
					<p>
						<b>temperature</b>: {weatherData.main.temp.toFixed(0)}°F
					</p>
					<p>
						<b>wind</b>: {weatherData.wind.speed} mph
					</p>
				</>
			) : (
				<h1>too many api calls. try again later</h1>
			)}
		</div>
	);
};

export default Weather;
