import React from "react";
import { NearbyRestaurant } from "./ZomatoInterface";

export interface ZomatoRestaurantsProps {
  nearby_restaurants: NearbyRestaurant;

  key: number;
}

export interface ZomatoRestaurantsState {
  nearby_restaurants: string[];
}

class ZomatoRestaurants extends React.Component<
  ZomatoRestaurantsProps,
  ZomatoRestaurantsState
> {
  constructor(props: ZomatoRestaurantsProps) {
    super(props);
  }
  render() {
    return <div> {this.props.nearby_restaurants.name} </div>;
  }
}

export default ZomatoRestaurants;
