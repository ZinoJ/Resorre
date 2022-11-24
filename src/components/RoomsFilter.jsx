import React from 'react'
import Title from './Title'

function RoomsFilter() {
  return (
    <section className="filter-container">
      <Title title='Search Rooms'/>
      <form className="filter-form">
         <div className="form-group">
            <label htmlFor="type">room type</label>
            <select name="" id="type" className='form-control'>
               <option value="single">Single</option>
            </select>
         </div>
      </form>
    </section>
  )
}

export default RoomsFilter