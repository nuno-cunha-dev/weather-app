import React from 'react';
import WeatherBlock from '../../Components/ForecastPageComponents/WeatherComponent';
import './index.css';

export default class Forecast extends React.Component {
    render() {
        return <WeatherBlock className="center-xy" />;
    }
}