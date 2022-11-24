import React from 'react'
import { useSelector } from 'react-redux'
import { selectRooms } from '../redux/roomSlice'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

function RoomsContainer() {
   const rooms = useSelector(selectRooms)
  return (
    <div>
      <RoomsFilter />
      <RoomsList rooms={rooms}/>
    </div>
  )
}

export default RoomsContainer