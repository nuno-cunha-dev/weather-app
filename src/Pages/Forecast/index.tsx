import axios from 'axios';
import React from 'react';
import WeatherDto from '../../Common/Dtos/Weather.dto';
import WeatherBlock from '../../Components/ForecastPageComponents/WeatherComponent';
import './index.css';

export default class Forecast extends React.Component {
    state = {
        isWeatherDataLoaded: false,
        weatherDto: {},
    };

    componentDidMount() {
        if (this.state.isWeatherDataLoaded) {
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
        this.setState({
            isWeatherDataLoaded: true,
            weatherDto: weatherDto
        });
    }

    render() {
        if (this.state.isWeatherDataLoaded) {
            return <WeatherBlock className="center-xy" weather={this.state.weatherDto as WeatherDto} />;            
        }

        return '';
    }
}