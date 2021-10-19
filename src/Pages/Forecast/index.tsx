import axios from 'axios';
import React from 'react';
import WeatherDto from '../../Common/Dtos/Weather.dto';
import WeatherBlock from '../../Components/ForecastPageComponents/WeatherComponent';
import './index.css';

export default class Forecast extends React.Component {
    state = {
        weatherData: {
            upToDate: false,
            temperature: 0,
            weatherDescription: '',
            city: '',
        }
    };

    componentDidMount() {
        if(this.state.weatherData.upToDate) {
            return;
        }
        
        axios.get('https://api.365weather.tk/weather/current')
        .then((request: any) => {
            this.buildWeatherBlockData(request.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    private buildWeatherBlockData(weatherDto: WeatherDto) {
        this.setState({ weatherData: {
            upToDate: true,
            temperature: weatherDto.temperature,
            weatherDescription: weatherDto.description,
            city: weatherDto.city,
        }});
    }

    render() {
        return <WeatherBlock className="center-xy" weather={this.state.weatherData}/>;
    }
}