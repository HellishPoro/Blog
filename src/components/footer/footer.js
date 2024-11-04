import { useEffect, useState } from "react"
import styled from "styled-components"


const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('')
	const [temperature, setTemperature] = useState('')
	const [weather, setWeather] = useState('')

	useEffect(() => {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=saint petersburg&units=metric&lang=ru&appid=a11cac4973ac9181add0fed856a0545c')
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name)
				setTemperature(Math.round(main.temp))
				setWeather(weather[0].description)
			})
	}, [])

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleDateString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градус, {weather}
				</div>
			</div>
		</div>
	)
}

export const Footer = styled(FooterContainer)`
	display:  flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	box-shadow: 0px 2px 17px #000;
    background-color: #fff;
`;
