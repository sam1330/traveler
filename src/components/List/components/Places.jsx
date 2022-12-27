import React, { useContext, useState, useEffect, createRef } from "react";
import {
  Grid,
} from "@material-ui/core";

import useStyles from "../styles";

import PlaceDetails from "../../PlaceDetails/PlaceDetails";

//CONTEXT
import childClickedContext from "../../context/childClickedContext";

const Places = ({ places }) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);


  const childClicked = useContext(childClickedContext);
  console.log(childClicked);

  useEffect(() => {
    const refs = Array(places?.length || 0).fill().map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <Grid container spacing={3} className={classes.list}>
      {places?.map((place, index) => (
        <Grid item key={index} xs={12}>
          <PlaceDetails
            place={place}
            selected={Number(childClicked) === index}
            refProp={elRefs[index]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Places;
