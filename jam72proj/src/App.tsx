import React from "react";
import Grid from "@material-ui/core/Grid";
import OpenWeatherMain from "./OpenWeather/OpenWeatherMain";
import Zomato from "./Zomato/Zomato";
import NasaMain from "./Nasa/NasaMain";

export interface AppProps {}
export interface AppState {
  latitude: number;
  longitude: number;
  date: Date;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      date: new Date(),
    };
    this.getLocation = this.getLocation.bind(this);
    this.success = this.success.bind(this);
    this.failure = this.failure.bind(this);
  }

  componentWillMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.failure);
    }
  }
  success = (pos: Position): void => {
    this.setState({ latitude: pos.coords.latitude });
    this.setState({ longitude: pos.coords.longitude });
  };
  failure = (pos: PositionError): void => {
    console.log("error", pos);
  };

  render() {
    return (
      <div id="app">
        {this.state.latitude > 0 && this.state.longitude ? (
          <Grid container justify="center">
            <h1> JAM info </h1>
            <Grid item xl={12}>
              <div id="mainTopSection">
                <OpenWeatherMain
                  url={`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=fd18b03e8677888ed6de2e157e4e2db6&units=imperial`}
                />
                <NasaMain
                  latitude={this.state.latitude}
                  longitude={this.state.longitude}
                  date={this.state.date}
                />
              </div>
            </Grid>
              <Zomato
                url={`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.latitude}&lon=${this.state.longitude}`}
              />
          </Grid>
        ) : null}
      </div>
    );
  }
}
export default App;
