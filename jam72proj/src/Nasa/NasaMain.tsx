import React from "react";
import NasaImage from "./NasaImage";

export interface NasaImageMainProps {
  latitude: number;
  longitude: number;
  date: Date;
}

export interface NasaImageMainState {
  img: any;
}

class NasaMain extends React.Component<NasaImageMainProps, NasaImageMainState> {
  constructor(props: NasaImageMainProps) {
    super(props);

    this.state = {
      img: null
    };
    this.componentgetsProps = this.componentgetsProps.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentgetsProps() {
    fetch(`https://api.nasa.gov/planetary/earth/imagery/?lon=${this.state.longitude}&lat=${this.state.latitude}&date=2020-09-12&cloud_score=True&api_key=xjTmLfj7sIWxLjV4hzb2nrcxwPuF23ovPcq5YqnI`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          img: json.url,
        });
        console.log(this.state.img);
      })
      .catch((error) => console.log(error));
  }

  formatDate() {
    let month = String(this.props.date.getMonth()+1);
    let day = String(this.props.date.getDate());
    if ((month).length === 1) {
      month = '0' + month;
    }
    if ((day).length === 1) {
      day = '0' + day;
    }
    let date = ${this.props.date.getFullYear()}-${month}-${day};
    console.log(date);
    return date;
  }

  render() {
    return (
      <div>
        <h1>Image of Your Location via NASA</h1>
        <NasaImage url={this.state.img} />
        <p>
          Image displayed is based on your current latitude and longitude
          utilizing the NASA Earth API.
        </p>
      </div>
    );
  }
}

export default NasaMain;
