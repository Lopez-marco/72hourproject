import React from "react";
import { NearbyRestaurant } from "./ZomatoInterface";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { generateKeyPair } from "crypto";

const useStyles = makeStyles({
  root: {
    maxWidth: 430,
    border: 0,
    fontSize: 16,
    borderRadius: 15,
    boxShadow: "0 0px 5px 2px",
  },
  media: {
    height: 340,
  },
  background: {
    background: "#333333",
    color: "#FFFFFF",
  },
  palette: {
    warning: {
      main: "#ff9800",
    },
  },
});

const Style = {
  height: 340,
  width: 430,
};

export interface ZomatoRestaurantsProps {
  key: number;
  restaurants: NearbyRestaurant;
}

const ZomatoRestaurants: React.SFC<ZomatoRestaurantsProps> = (props) => {
  const classes = useStyles();

  function addDefaultSrc(ev: any) {
    ev.target.src =
      "https://res.cloudinary.com/mlpez/image/upload/v1600128754/wmph0dovt7toans4wy7e.jpg";
  }

  return (
    <div>
      {/* {props.restaurants.restaurant.menu_url} */}
      <br />
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} title="Contemplative Reptile">
              <img
                src={props.restaurants.restaurant.thumb}
                style={Style}
                className="imageCard"
                onError={addDefaultSrc}
              />{" "}
            </CardMedia>
            <CardContent className={classes.background}>
              <Typography variant="h5" component="h2">
                {props.restaurants.restaurant.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.background}
              >
                {props.restaurants.restaurant.cuisines}
                <br />
                Avarege cost for two: $
                {props.restaurants.restaurant.average_cost_for_two}.00
                <br />
                {props.restaurants.restaurant.location.address}
                <br />
                {props.restaurants.restaurant.user_rating.rating_text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.background}>
            <Button
              style={{margin: '0.5em'}}
              variant="contained"
              href={props.restaurants.restaurant.menu_url}
            >
              Go to Menu
            </Button>
          </CardActions>
        </Card>
      </Container>
      <br />
    </div>
  );
};

export default ZomatoRestaurants;
