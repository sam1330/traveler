import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

// COMPONENTS
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

//API
import { getPlacesData } from "./api/index";

//CONTEXT
import childClickedContext from "./components/context/childClickedContext";
import IsLoadingContext from "./components/context/IsLoadingContext";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <IsLoadingContext.Provider value={isLoading}>
        <Header />
        <childClickedContext.Provider value={childClicked}>
          <Grid container spacing={3} style={{ width: "100%" }}>
            <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
              <List places={places} isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
                setChildClicked={setChildClicked}
              />
            </Grid>
          </Grid>
        </childClickedContext.Provider>
      </IsLoadingContext.Provider>
    </>
  );
};

export default App;
