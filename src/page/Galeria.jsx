import { useState, useEffect } from "react";

function Galeria() {
  // Array de imágenes del carrusel
  const slides = [
    { src: "img/img1.webp", alt: "Jornada médica del Proyecto San Francisco de Asís" },
    { src: "img/img2.webp", alt: "Atención médica a pacientes de la comunidad" },
    { src: "img/img3.webp", alt: "Equipo del proyecto durante una actividad comunitaria" },
    { src: "img/img4.webp", alt: "Servicios del laboratorio clínico Santa María" },
    { src: "img/img5.webp", alt: "Instalaciones del Proyecto San Francisco de Asís" },
    { src: "img/img7.webp", alt: "Personal del proyecto en una jornada de salud" },
    { src: "img/img8.webp", alt: "Entrega de apoyo y medicamentos a la comunidad" },
    { src: "img/programa-clinica.webp", alt: "Clínica Santa María, atención médica general" },
    { src: "img/nutri.webp", alt: "Proyecto de nutrición infantil de la comunidad" },
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
      <h2 className="text-xl mb-4">Imágenes del trabajo, la atención y los espacios del Proyecto San Francisco de Asís.</h2>

      <div className="relative w-full max-w-5xl mx-auto h-120 overflow-hidden rounded-lg shadow-md bg-neutral-200">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="boton-carrusel left-2"
        >
          ◀
        </button>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="boton-carrusel right-2"
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