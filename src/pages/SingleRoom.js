import React, { useState, useContext } from "react";
import defaultImg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  const { slug } = useParams();
  const [state, setState] = useState({
    slug: slug
  });
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(state.slug);
  if (!room) {
    return (
      <div className="error">
        <h3>No Such Room Could Be Found !</h3>
        <Link to="/rooms" className="btn-primary">
          Back To Rooms
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
    images
  } = room;
  const [mainImg, ...deafultImg] = images;
  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} Room`}>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {deafultImg.map((img, index) => {
            return <img src={img} alt="" key={index} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "Free Breakfast Included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
