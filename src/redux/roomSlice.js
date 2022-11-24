import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   rooms: [],
   // featuredRooms: []
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
   STORE_ROOMS(state, action){
      state.rooms = action.payload.rooms;
   },
  }
});

export const {STORE_ROOMS} = roomSlice.actions
export const selectRooms = (state) => state.room.rooms
// export const selectFeaturedRooms = (state) => state.room.featuredRooms

export default roomSlice.reducer