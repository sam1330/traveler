import React from "react";

import Header from "./components/Header";
import Places from "./components/Places";

const List = ({ places }) => {
  return (
		<>
			<Header />
			<Places places={ places }/>
		</>
  );
};

export default List;
