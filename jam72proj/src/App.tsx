
import React from 'react';
import OpenWeatherMain from './OpenWeather/OpenWeatherMain';
import React from "react";
import Zomato from "./Zomato/Zomato";

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
      navigator.geolocation.getCurrentPosition(this.success, this.failure)
    }
  }
  success = (pos: Position): void => {
    
  failure = (pos: PositionError): void => {
    console.log('error', pos);
  }
    
  render() {
            const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.latitude}&lon=${this.state.longitude}`;
    return (
      <div>
        {this.state.latitude > 0 && this.state.longitude ?
          <OpenWeatherMain url={`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=fd18b03e8677888ed6de2e157e4e2db6&units=imperial`} />
          : null}
       <Zomato url={zomatoURL} />
        )
  }
}
export default App;
