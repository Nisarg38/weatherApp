import styled from 'styled-components'

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

const WeatherCondition = styled.div`
display:flex;
flex-direction: row;
color:white;
align-item: center;
width: 100%;
justify-content: space-between;
margin 13px auto
`;

const Condition = styled.span`
color: white;
margin: 20px auto;
font-size: 14px;
& span {
    font-size: 28px;

}
`;

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`;


const Location = styled.span`
color:white;
font-size: 28px;
font-weight: bold;
margin-top: 20px;
`;

const WeatherinfoLable = styled.span`
color:white;
font-size: 16px;
font-weight: bold;
margin: 20px 25px 10px; 
text-align: start;
width: 90%;
margin-top: -15px;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  color:white;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  color:white;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const {name,value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

const WeatherComponent = (props) => {

    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return(
        <>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherCondition>
            <Condition>
                <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                {`  |  ${weather?.weather[0].description}`}
            </Condition>
            <WeatherLogo src="/icons/perfect-day.svg"/>
        </WeatherCondition>
        <WeatherinfoLable>Weather Info</WeatherinfoLable>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay ? "Sunset":"Sunrise"} 
                                  value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
            <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity}/>
            <WeatherInfoComponent name="Wind" value={weather?.wind?.speed}/>
            <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure}/>
        </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;