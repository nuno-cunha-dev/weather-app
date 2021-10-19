import React from 'react';
import weatherIcon from '../../../Assets/WeatherIcons/svg/wsymbol_0002_sunny_intervals.svg';
import StyledComponentProp from '../../../Common/Interfaces/StyledComponentProp.interface';
import './index.css';

export default class WeatherBlock extends React.Component<StyledComponentProp | any, {}> {
    private getWeekday(): string {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[ new Date().getDay() ];
    }

    render() {
        return (
            <div className={"weather-block " + this.props.className}>
                <div className="weather-date">
                    <div className="weather-day-of-year">Today</div>
                    <div className="weather-day-of-week">{this.getWeekday()}</div>
                </div>
                <div className="weather-icon">
                    <img src={weatherIcon} alt="Weather prediction today" />
                </div>
                <div className="weather-temperature">
                    <span className="weather-temperature-degree">{this.props.weather.temperature}</span>
                    <span className="weather-temperature-degree-type">°</span>
                    <span className="weather-temperature-degree-type-scale">C</span>
                </div>
                <div className="weather-description">
                    <span className="weather-description-text">{this.props.weather.weatherDescription}</span>
                    <span>&nbsp;in&nbsp;</span>
                    <span className="weather-description-city">{this.props.weather.city}</span>
                </div>
            </div>
        );
    }
}