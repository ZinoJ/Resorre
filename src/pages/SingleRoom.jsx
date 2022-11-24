import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import StyledHero from "../components/StyledHero";
import { selectRooms } from "../redux/roomSlice";

function SingleRoom() {
  const { slug } = useParams();
  const rooms = useSelector(selectRooms);
  const singleRoom = rooms.find((room) => room.slug === slug);

  if (!singleRoom) {
    return (
      <div className="error">
        <h3>No such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = singleRoom;

  //mainImg is first image in the array
  //defaultImg are the remaining images in the array of images
  // const [mainImg, ...defaultImg] = images

  return (
    <>
      <StyledHero img={images[0]}>
        <Banner title={`${name}`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((extra, index) => (
            <li key={index}> - {extra}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SingleRoom;
