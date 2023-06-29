import React from "react";
import { AddIcon, CardIcon, PhoneIcon, Wraper } from "./Home.styled";
import { MainTitle } from "components/App.styled";

const Home = () => {
  return (
    <>
      <MainTitle>Welcome to the PhoneBook</MainTitle>
      <Wraper>
        <PhoneIcon />
        <CardIcon />
        <AddIcon />
      </Wraper>
    </>
  );
};

export default Home;
