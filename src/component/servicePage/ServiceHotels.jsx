import React from 'react'
import Mymap from '../map/Mymap'
import Heading from '../heading/Heading'
// import RatingSys from '../ratingsystem/HotelRating.jsx'
function ServiceHotels() {
  return (
    <div>
            <Heading text={'LOCATE-HERE'}></Heading>
            <Mymap></Mymap>
            {/* <RatingSys></RatingSys> */}
    </div>
  )
}

export default ServiceHotels
