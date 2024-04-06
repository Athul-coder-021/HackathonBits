import React from 'react'
import Card from '../card/Card'
import ImageSection from '../imgSec/ImageSection'
import Heading from '../heading/Heading'
import Mymap from '../map/Mymap'

function Home() {
  return (
    <div>
      <ImageSection></ImageSection>
      <Heading text={'LOCATE your-self'}></Heading>
      <Mymap/>
      <Heading text={'Explore, Taste, and Thrive!'}></Heading>
      <Card></Card>
    </div>
  )
}

export default Home
