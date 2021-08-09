import styled from 'styled-components';
import { useState } from 'react';
import WeatherComponent from './Components/WeatherComponent';
import CityComponent from './Components/CityComponents';
import axios from 'axios';

const Container = styled.div`
display: flex;
flex-direction : column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: black;
font-family: Montserrat
`;


const AppLabel = styled.div`
color: white;
margin: 20px auto;
font-size: 20px;
font-weight: bold;
`;

function App() {
  const [city, updatecity] = useState();
  const [weather, updateweather] = useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8be39510f66b94d1859317a8e9cab91`)
    console.log(response)
    updateweather(response.data);
  };


  return <Container>
    <AppLabel>Weather App</AppLabel>
    {
      weather ? <WeatherComponent weather={weather}/> 
      : <CityComponent updatecity={updatecity} fetchWeather={fetchWeather}/>
    }
  </Container>

}

export default App;
