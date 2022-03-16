import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Rating</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.rating}
          </Typography>
        </Box>

        {place.cuisine &&
          place?.cuisine.map(({ name }) => (
            <Chip
              key={name}
              color="primary"
              variant="outlined"
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}

        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="text-secondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> <span className={classes.address}>{place.address}</span>
          </Typography>
        )}

        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="text-secondary"
            className={classes.subtitle}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            More Info
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
