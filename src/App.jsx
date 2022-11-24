import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import data from "./data";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { STORE_ROOMS } from "./redux/roomSlice";

function App() {
  const dispatch = useDispatch()
   const formatData = (data) => {
      let tempData = data.map(item => {
         let id = item.sys.id
         let images = item.fields.images.map(image => image.fields.file.url)
         let room = {...item.fields, images, id}
         return room
      })
      return tempData
   }
   useEffect(() => {
      dispatch(STORE_ROOMS({
         rooms: formatData(data)
      }))
   },[dispatch])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
