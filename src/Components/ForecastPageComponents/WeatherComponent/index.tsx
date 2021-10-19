import React from 'react';
import WeatherDto from '../../../Common/Dtos/Weather.dto';
import './index.css';

export default class WeatherBlock extends React.Component<{className: string, weather: WeatherDto}, {}> {
    private getWeekday(): string {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[ new Date().getDay() ];
    }

    private getWeatherIconPath(): string {
        return this.props.weather.icon ? '/assets/images/weather-icons/svg/' + this.props.weather.icon.slice(0, 2) + '.svg' : '';
    }

    render() {
        return (
            <div className={"weather-block " + this.props.className}>
                <div className="weather-date">
                    <div className="weather-day-of-year">Now</div>
                    <div className="weather-day-of-week">{this.getWeekday()}</div>
                </div>
                <div className="weather-icon">
                    <img src={this.getWeatherIconPath()} alt="Weather prediction today" />
                </div>
                <div className="weather-temperature">
                    <span className="weather-temperature-degree">{this.props.weather.temperature}</span>
                    <span className="weather-temperature-degree-type">°</span>
                    <span className="weather-temperature-degree-type-scale">{this.props.weather.unit[0]}</span>
                </div>
                <div className="weather-description">
                    <span className="weather-description-text">{this.props.weather.description}</span>
                    <span>&nbsp;in&nbsp;</span>
                    <span className="weather-description-city">{this.props.weather.city}</span>
                </div>
            </div>
        );
    }
}