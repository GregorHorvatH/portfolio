// core
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

// components
import Description from '../../components/Description';
import City from '../../components/City';

// styles
import styles from './Weather.module.scss';

// constants
const DEFAULT_CITIES = ['Kyiv', 'Lviv', 'New York'];
const LOCAL_STORAGE = 'hg.inf.ua.weather.cities';

class Weather extends Component {
  state = {
    cityName: '',
    cities: [],
    error: '',
    isLoading: false,
    showError: false,
  }

  componentDidMount() {
    this.textInput.focus();
    this.loadStoredCities();

    this.refreshInterval = setInterval(this.refreshData, 300000); // once in 5 minute
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  refreshData = async () => {
    await this.setState({ cities: [] });
    await this.loadStoredCities();
  }

  loadStoredCities = () => {
    const storedCities = JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];
    const cities = storedCities.length ? storedCities : DEFAULT_CITIES;

    cities.forEach(async (cityName) => {
      await this.addCity(cityName);
    });
  }

  saveCities = () => {
    const { cities } = this.state;

    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(cities.map(city => city.name)));
  }

  addCity = (city) => {
    const cityName = city || this.state.cityName;

    if (!cityName) {
      return;
    }

    this.setState({ isLoading: true, showError: false });
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ecd63065bd25bdde07e45cd2f66852ce&units=metric&lang=EN`)
      .then(resp => {
        if (resp.status !== 200) {
          this.setState({
            cityName: '',
            isLoading: false,
            showError: true,
            error: `city ${cityName} is not found`,
          });
          throw new Error();
        } else {
          return resp.json();
        }
      })
      .then(res => this.setState(({ cities }) => ({
        cityName: '',
        cities: [
          res,
          ...cities,
        ],
        isLoading: false
      }), this.saveCities))
      .catch(error => console.log(error))
      .finally(() => this.textInput.focus());
  }

  handleDeleteCity = (id) => this.setState(({ cities }) => ({
    cities: cities.filter(city => city.id !== id)
  }), this.saveCities)

  handleChangeCityName = ({ target }) => {
    this.setState({ cityName: target.value });
  }

  handleSubmit = (e) => {
    const { cityName } = this.state;

    e.preventDefault();
    if (cityName) {
      this.addCity(cityName);
    }
  }

  handleCloseError = () => this.setState({ showError: false })

  render() {
    const { cities, cityName, isLoading, showError, error } = this.state;

    return (
      <div className="container-fluid app-container">
        <Description title="Weather info"
          details="React, ClassNames, React Loader, CSS Modules, Bootstrap" />
        <div className="row">
          <div className="col-sm-12">
            <div className={["input-group mb-3", styles.weatherinputwrapper].join(' ')}>
              {
                isLoading
                  ? <Loader
                    type="ThreeDots"
                    color="#ffbf00"
                    height={40}
                    width={100}
                  />
                  :
                  <form className={styles.form} onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      className={["form-control", styles.weatherinput].join(' ')}
                      placeholder="Enter City"
                      value={cityName}
                      onChange={this.handleChangeCityName}
                      ref={input => this.textInput = input}
                    />
                    <div className="input-group-append">
                      <button
                        className={["btn btn-light", styles.searchButton].join(' ')}
                        type="submit">Search</button>
                    </div>
                  </form>
              }
            </div>
            {
              showError &&
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error:</strong> {error}
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={this.handleCloseError}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            }
          </div>
        </div>
        <div className="row">
          {
            cities.length
              ? cities.map(city => (
                <City city={city} onDelete={() => this.handleDeleteCity(city.id)} key={city.id} />
              ))
              : <div className={["col-12", styles.weatherNoCities].join(' ')}>
                <h2>No cities selected...</h2>
              </div>
          }
        </div>
      </div >
    );
  }
}

export default Weather;
