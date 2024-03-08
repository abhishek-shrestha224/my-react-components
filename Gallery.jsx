import * as React from "react";

import "../styles/Gallery.css";

const Gallery = () => {
  const itemData = [
    {
      img: "/img/img1.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img2.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img3.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img4.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img5.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img6.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img7.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img8.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/img9.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      <section className="gallery-section">
        <h1 className="gallery-title">Our Gallery</h1>
        <div className="gallery">
          {itemData.map((item) => (
            <div className="gallery-img">
              <img key={item.img} src={item.img} />
              <div className="hidden-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
