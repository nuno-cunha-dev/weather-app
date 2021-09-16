import React from 'react';
import weatherIcon from '../../../Assets/WeatherIcons/svg/wsymbol_0002_sunny_intervals.svg';
import StyledComponentProp from '../../../Common/Interfaces/StyledComponentProp';
import './index.css';

export default class WeatherBlock extends React.Component<StyledComponentProp, {}> {
    render() {
        return (
            <div className={"weather-block " + this.props.className}>
                <div className="weather-date">
                    <div className="weather-day-of-year">Today</div>
                    <div className="weather-day-of-week">Wednesday</div>
                </div>
                <div className="weather-icon">
                    <img src={weatherIcon} alt="Weather prediction today" />
                </div>
                <div className="weather-temperature">
                    <span className="weather-temperature-degree">28</span>
                    <span className="weather-temperature-degree-type">°</span>
                    <span className="weather-temperature-degree-type-scale">C</span>
                </div>
                <div className="weather-description">
                    <span className="weather-description-text">Few clouds in</span>
                    <span>&nbsp;</span>
                    <span className="weather-description-city">Porto</span>
                </div>
            </div>
        );
    }
}