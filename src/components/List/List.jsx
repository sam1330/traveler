import React, { useContext } from "react";

import Header from "./components/Header";
import Places from "./components/Places";

import { CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

//CONTEXT
import IsLoadingContext from "../context/IsLoadingContext";

const List = ({ places }) => {
	const classes = useStyles();

	const isLoading = useContext(IsLoadingContext);

  return (
    <>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Header />
          <Places places={places} />
        </>
      )}
    </>
  );
};

export default List;
