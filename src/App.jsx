import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

function App() {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState('');

	const countriesToDisplay = filter
		? countries.filter(country => country.name.common.toLowerCase().includes(filter))
		: countries;

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then(response => {
			setCountries(response.data);
		});
	}, []);

	return (
		<div className='App'>
			<h1>type a country to find more info</h1>
			<form onSubmit={e => handleFormSubmission(e)}>
				<label htmlFor='filter'>find countries</label>
				<input
					id='filter'
					value={filter}
					onChange={e => setFilter(e.target.value.toLowerCase())}
				/>
			</form>
			{countriesToDisplay.length === 1 ? (
				<Country
					country={countriesToDisplay[0].name.common}
					capital={countriesToDisplay[0].capital[0]}
					languages={countriesToDisplay[0].languages}
					flag={countriesToDisplay[0].flags}
				/>
			) : (
				<ul>
					{countriesToDisplay.map(country => (
						<li key={country.name.official}>{country.name.common}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default App;
