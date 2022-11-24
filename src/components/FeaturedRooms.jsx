import React from 'react'
import { useSelector } from 'react-redux'
import { selectRooms } from '../redux/roomSlice'
import Room from './Room'
import Title from './Title'


function FeaturedRooms() {
   
   const rooms = useSelector(selectRooms)
   // console.log(featuredRooms)
   const featuredRooms = rooms.filter((room) => room.featured === true)

   console.log(featuredRooms)
   
  return (
    <section className='featured-rooms'>
      <Title title='Featured Rooms'/>
      <div className="featured-rooms-center">
         {featuredRooms.map((room) => (
            <Room key={room.id} room={room}/>
         ))}
      </div>
      
    </section>
  )
}

export default FeaturedRooms