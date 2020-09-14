import React from "react";
import { NasaMainResponse } from './NasaMainInterface';

export interface NasaImageMainProps {
  latitude: number;
  longitude: number;
  date: Date;
}

export interface NasaImageMainState {
  img: string;
}

class NasaMain extends React.Component<NasaImageMainProps, NasaImageMainState> {
  constructor(props: NasaImageMainProps) {
    super(props);

    this.state = {
      img: ''
    };
    this.componentgetsProps = this.componentgetsProps.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate() {
    let month = String(this.props.date.getMonth() + 1);
    let day = String(this.props.date.getDate());
    if ((month).length === 1) {
      month = '0' + month;
    }
    if ((day).length === 1) {
      day = '0' + day;
    }
    let date = `${ this.props.date.getFullYear()-1 }-${ month }-${ day }`;
    console.log('date ', date);
    return date;
  }

  componentgetsProps(date:string) {
    let url = `https://api.nasa.gov/planetary/earth/assets?lon=${this.props.longitude}&lat=${this.props.latitude}&date=${date}&cloud_score=True&api_key=xjTmLfj7sIWxLjV4hzb2nrcxwPuF23ovPcq5YqnI`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((json:NasaMainResponse) => {
        this.setState({
          img: json.url
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.componentgetsProps(this.formatDate());
  }



  render() {
    return (
      <div>
        <h1>Image of Your Location via NASA</h1>
        <p>
          Image displayed is based on your current latitude and longitude
          utilizing the NASA Earth API.
        </p>
        <img src={this.state.img} alt=''></img>
      </div>
    );
  }
}

export default NasaMain;
