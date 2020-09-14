import React from "react";
import { RestaurantResponse } from "./ZomatoInterface";

export interface ZomatoProps {
  url: string;
}

export interface ZomatoState {
  zomatoRestaurants: any;
}

class Zomato extends React.Component<ZomatoProps, ZomatoState> {
  constructor(props: ZomatoProps) {
    super(props);
    this.state = { zomatoRestaurants: [] };
  }

  componentDidMount() {
    fetch(this.props.url, {
      method: "GET",
      headers: {
        "user-key": "d29e21fa0bcb0a754769d23457e8a27a",
        // "Content-Type": "application/x-www-form-urlencoded",
        // Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json: RestaurantResponse) => {
        console.log(json);
        this.setState({ zomatoRestaurants: json });
      });
  }

  render() {
    return <div>hello from zomato Component</div>;
  }
}

export default Zomato;
