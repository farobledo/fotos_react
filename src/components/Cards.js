import React from "react";
import Card from "./Card";

import image1 from "../assets/images (1).jfif";
import image2 from '../assets/images (1).jfif'
import image3 from '../assets/android3.jfif'

const cards = [
  {
    id: 1,
    title: "Andrios 1",
    image: image1,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Android 1",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Android 3",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
];

function Cards() {
  return (


    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;