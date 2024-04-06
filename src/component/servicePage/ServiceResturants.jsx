import React from 'react'
import Card from "../card/Card";
import Mymap from '../map/Mymap'
import Heading from '../heading/Heading'
function ServiceResturants() {
  return (
    <div>
      <Heading text={'LOCATE-HERE'}></Heading>
      
      <Mymap></Mymap>
    </div>
  )
}

export default ServiceResturants
