import React from 'react';

export interface AppProps {
}
export interface AppState {
  latitude: number;
  longitude: number;
  date: Date;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      date: new Date()
    };
    this.getLocation = this.getLocation.bind(this);
    this.success = this.success.bind(this);
    this.failure = this.failure.bind(this);
  }

  componentWillMount() {
    this.getLocation();
  }

  getLocation() {
    console.log('this runs');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.failure)
      console.log('this is running')
    }
  }
  success = (pos: Position): void => {
    this.setState({ latitude: pos.coords.latitude })
    this.setState({ longitude: pos.coords.longitude })

  }

  failure = (pos: PositionError): void => {
    console.log('error', pos);
  }
  render() {
    return (
      <div>
        {this.state.latitude > 0 && this.state.longitude > 0 ? <p>Add your component here</p> : null}
      </div>
    );
  }
}

export default App;