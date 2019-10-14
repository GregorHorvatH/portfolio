// core
import React, { Component } from 'react';

// styles
import './City.scss';

class City extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.city.id !== this.props.city.id;
  }

  render() {
    const { city, onDelete } = this.props;
    const { icon, description } = city.weather[0];
    const { temp, pressure, humidity } = city.main;
    const { speed, deg } = city.wind;
    const { country, sunrise, sunset } = city.sys;
    const { lon, lat } = city.coord;

    return (
      <div className="col-12 col-sm-6 col-md-4 weather-city">
        <button type="button" className="btn btn-danger weather-close" onClick={onDelete}>x</button>
        <h3 className="weather-header">{`${city.name}, ${country}`}</h3>
        <div className="weather-temperature">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
          <h3>{`${temp} °C`}</h3>
        </div>
        <h5>{description}</h5>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="row">Wind</th>
              <td>{`${speed} m/s, ${deg}°`}</td>
            </tr>
            <tr>
              <th scope="row">Pressure</th>
              <td>{`${pressure} hpa`}</td>
            </tr>
            <tr>
              <th scope="row">Humidity</th>
              <td>{`${humidity} %`}</td>
            </tr>
            <tr>
              <th scope="row">Sunrise</th>
              <td>{sunrise}</td>
            </tr>
            <tr>
              <th scope="row">Sunset</th>
              <td>{sunset}</td>
            </tr>
            <tr>
              <th scope="row">Geo coords</th>
              <td>{`[${lon}, ${lat}]`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

export default City;
