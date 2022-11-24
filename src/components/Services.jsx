import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCocktail />,
      title: "Free Cocktail",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis in sequi voluptate ex perspiciatis, ab qui dolores culpa vel nisi!",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis in sequi voluptate ex perspiciatis, ab qui dolores culpa vel nisi!",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis in sequi voluptate ex perspiciatis, ab qui dolores culpa vel nisi!",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis in sequi voluptate ex perspiciatis, ab qui dolores culpa vel nisi!",
    },
  ]

  return (
    <section className="services">
      <Title />
      <div className="services-center">
         {services.map((service, index) => (
            <article className="service" key={index}>
               <span>{service.icon}</span>
               <h6>{service.title}</h6>
               <p>{service.info}</p>
            </article>
         ))}
      </div>

    </section>
  );
}

export default Services;
