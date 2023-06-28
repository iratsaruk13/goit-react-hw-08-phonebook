import React from 'react'
import { AddIcon, CardIcon, HomeTitle, PhoneIcon, Wraper } from './Home.styled'

const Home = () => {
  return (
    <>
      <HomeTitle>Welcome to the PhoneBook</HomeTitle>
      <Wraper>
        <PhoneIcon/>
        <CardIcon/>
        <AddIcon/>
      </Wraper>
    </>
  )
}

export default Home
