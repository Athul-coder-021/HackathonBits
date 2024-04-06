import React from 'react'
import Mymap from '../map/Mymap'
import ThreeD from '../threeD/ThreeD'
import Heading from '../heading/Heading'
function ServiceNear() {
  return (
    <div>
            <Heading text={'LOCATE-HERE'}></Heading>
      <Mymap></Mymap>
      <Heading text={'3d'}></Heading>
      <ThreeD></ThreeD>
    </div>
  )
}

export default ServiceNear
