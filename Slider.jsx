"use client";
import React, { useEffect, useState } from "react";
import Testimony from "./Testimony";

import "../styles/Slider.css";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = () => {
    setCurrentSlide((currentSlide) => {
      if (currentSlide === testimonials.length - 1) return 0;
      return currentSlide + 1;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(goNext, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const sliderStyles = {
    transform: `translateX(${-100 * currentSlide}%)`,
  };
  const testimonials = [
    {
      img: "img/profile.webp",
      title: "Alice Anderson",
      description:
        "Working with this team has been a game-changer for our business. Their expertise and dedication have significantly improved our online presence and boosted our sales. I highly recommend their services!",
    },
    {
      img: "img/profile.webp",
      title: "Bob Johnson",
      description:
        "I'm extremely satisfied with the quality of service provided. The team went above and beyond to meet our specific needs. Their attention to detail and timely delivery exceeded our expectations.",
    },
    {
      img: "img/profile.webp",
      title: "Caroline Martinez",
      description:
        "Exceptional professionals! The level of creativity and innovation they brought to our project was outstanding. It was a pleasure working with a team that truly understands and values client satisfaction.",
    },
    {
      img: "img/profile.webp",
      title: "Daniel Brown",
      description:
        "I cannot express how grateful I am for the excellent work done by this team. Their commitment to excellence and ability to turn ideas into reality is unmatched. Truly impressed!",
    },
    {
      img: "img/profile.webp",
      title: "Eva White",
      description:
        "The team's attention to detail and commitment to delivering high-quality results is commendable. They are not just service providers but partners in our success journey. Looking forward to future collaborations.",
    },
    {
      img: "img/profile.webp",
      title: "Frank Miller",
      description:
        "Working with these professionals was a pleasure. They not only met but exceeded our expectations. Their communication, skills, and dedication make them a top choice for any project.",
    },
    {
      img: "img/profile.webp",
      title: "Grace Taylor",
      description:
        "Exceptional service! The team's ability to understand our vision and translate it into a stunning reality is remarkable. Their professionalism and creativity make them stand out in the industry.",
    },
    {
      img: "img/profile.webp",
      title: "Harry Robinson",
      description:
        "I've worked with many teams, but this one stands out for its reliability and top-notch results. Their commitment to delivering on time without compromising quality is truly commendable.",
    },
    {
      img: "img/profile.webp",
      title: "Isabel Perez",
      description:
        "The team's expertise and dedication have been instrumental in our success. Their strategic approach and creative solutions have added significant value to our projects. Highly recommended!",
    },
    {
      img: "img/profile.webp",
      title: "Jake Smith",
      description:
        "I couldn't be happier with the results delivered by this team. They are not just skilled professionals but also great collaborators. I look forward to working with them on future endeavors.",
    },
  ];

  return (
    <section className="slider-section">
      <div className="slider">
        {testimonials.map((testimony, index) => (
          <Testimony
            key={index}
            img={testimony.img}
            title={testimony.title}
            description={testimony.description}
            sliderStyles={sliderStyles}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
