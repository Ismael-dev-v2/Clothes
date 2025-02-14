import "./Carrusel.css";
import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Productos from "./Productos";

const DemoCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div ref={carouselRef}>
      <Carousel
        autoPlay={isVisible} // Solo se mueve si es visible
        infiniteLoop
        interval={3000} // Cambia cada 3 segundos
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        transitionTime={2000} // Animación fluida
        showIndicators={false}
      >
        {Productos.map((producto) => (
          <div key={producto.id} className="Carrusel">
            <img className="img" src={producto.img} alt="" />
            <p className="legend">{producto.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
