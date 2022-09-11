import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

const loader = () => <div></div>;
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Main"),
  loading: loader,
});

const Home = () => {
  return <HomeLazy />;
};
export default Home;