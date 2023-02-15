import Weather from './Weather';
import { useState } from 'react';

const Country = props => {
	const [showWeather, setShowWeather] = useState(false);
	const languages = props.languages;
	const languageArray = [];

	for (const language in languages) {
		languageArray.push(languages[language]);
	}

	return (
		<div>
			<h2>{props.country}</h2>
			<h4>capital: {props.capital}</h4>
			<h3>languages: </h3>
			<ul>
				{languageArray.map(language => (
					<li key={language}>{language}</li>
				))}
			</ul>
			<img src={props.flag.png} alt={props.flag.alt} />
			<br />
			<button onClick={() => setShowWeather(!showWeather)}>
				Find weather in {props.capital}
			</button>
			{showWeather && <Weather capital={props.capital} />}
		</div>
	);
};

export default Country;
