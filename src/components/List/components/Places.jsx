import React from "react";
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import useStyles from "../styles";

import PlaceDetails from "../../PlaceDetails/PlaceDetails";

const Places = ({ places }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.list}>
      {places?.map((place, index) => (
        <Grid item key={index} xs={12}>
          <PlaceDetails place={place} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Places;
