import React from "react";
import { RestaurantResponse, NearbyRestaurant } from "./ZomatoInterface";
import ZomatoRestaurants from "./ZomatoRestaurants";

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
      },
    })
      .then((res) => res.json())
      .then((json: RestaurantResponse) => {
        console.log(json);
        this.setState({ zomatoRestaurants: json.nearby_restaurants });
      });
  }

  render() {
    return (
      <div>
        {this.state.zomatoRestaurants.length > 0 ? (
          this.state.zomatoRestaurants.map(
            (nearby_restaurants: NearbyRestaurant, index: number) => (
              <ZomatoRestaurants
                nearby_restaurants={nearby_restaurants}
                key={index}
              />
            )
          )
        ) : (
          <></><div><div/>
        )}
      </div>
    );
  }
}

export default Zomato;
