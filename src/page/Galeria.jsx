import { useState, useEffect } from "react";

function Galeria() {
  // Array de imágenes del carrusel 
  const slides = [  
    "img/img1.webp",  
    "img/img2.webp",
    "img/img3.webp",
    "img/img4.webp",
    "img/img5.webp",
    "img/img7.webp",
    "img/img8.webp",
    "img/programa-clinica.webp",
    "img/nutri.webp"
  ];

  // Estado para controlar la imagen actual
  const [current, setCurrent] = useState(0);

  // Autoplay: cambia de imagen cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval); // limpiar intervalo al desmontar
  }, [slides.length]);

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <section className="p-4 text-center flex flex-col">
      <h1 className="text-xl font-bold mb-4">Galería de Fotos</h1>
      <h1 className="text-xl mb-4">Imágenes del trabajo, la atención y los espacios del Proyecto San Francisco de Asís.</h1>

      <div className="relative w-full max-w-5xl mx-auto h-120 overflow-hidden rounded-lg shadow-md bg-neutral-200">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 
            text-white p-2 rounded-full 
             hover:bg-gray-600 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
             transition duration-300 ease-in-out"
        >
          ◀
        </button>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 
             text-white p-2 rounded-full 
             hover:bg-gray-600 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
             transition duration-300 ease-in-out"
        >
          ▶
        </button>

        {/* Indicadores */}
        <div className="flex justify-center mt-2 space-x-2 absolute bottom-2 left-1/2 -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Galeria;


//Aja