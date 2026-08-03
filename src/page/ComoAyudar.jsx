import Formulario from '../components/formulario/Formulario'
import HeroPanel from "../components/hero-panel/heropanel";
import SubTitle from "../components/titles/subt";
import { CardIcono, CardPaso } from '../components/cards'

const camposVoluntariado = [
    {
        nombre: "nombre",
        etiqueta: "Nombre completo",
        tipo: "text",
        placeholder: "Escribe tu nombre completo",
        validar: (v) => (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{3,}$/.test(v) ? "Escribe un nombre válido." : null),
    },
    {
        nombre: "telefono",
        etiqueta: "Teléfono",
        tipo: "text",
        placeholder: "9999-9999",
        validar: (v) => (!/^(?:\+504\s?)?\d{4}-?\d{4}$/.test(v) ? "Escribe un teléfono válido." : null),
    },
    {
        nombre: "correo",
        etiqueta: "Correo electrónico",
        tipo: "email",
        placeholder: "Tu correo electrónico",
        anchoCompleto: true,
        validar: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Escribe un correo válido." : null),
    },
    {
        nombre: "motivo",
        etiqueta: "¿Por qué deseas ayudar?",
        tipo: "textarea",
        placeholder: "Escribe brevemente por qué deseas formar parte del voluntariado",
        anchoCompleto: true,
        validar: (v) => (v.length < 10 ? "Escribe al menos 10 caracteres." : null),
    },
];

const ComoAyudar = () => {

    return (
        <>
            <HeroPanel
                evento="Apoya nuestra labor"
                imagen="img/heli2.webp"
                titulo="¿Cómo puedes ayudar?"
                descripcion="Existen diferentes maneras de apoyar al Proyecto San Francisco de Asís. Tu ayuda puede convertirse en atención médica, estudios clínicos, medicamentos y acompañamiento para muchas familias."
            />

            <section className="seccion seccion-crema">
                <div className="contenedor">
                    <SubTitle
                        subt="Formas de colaborar"
                        desc="Puedes apoyar esta labor social de distintas maneras, según tus posibilidades y tu disponibilidad."
                    />

                    <div className="grid-tres-col">
                        <CardIcono
                            icono={
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21s-7-4.35-9.5-8.5C.5 9.2 2.1 5 6.2 5c2.1 0 3.4 1.2 4.1 2.3C11 6.2 12.3 5 14.4 5c4.1 0 5.7 4.2 3.7 7.5C15.6 16.65 12 21 12 21Z" />
                                </svg>
                            }
                            titulo="Donaciones"
                            descripcion="Tu aporte económico puede ayudar a sostener la atención médica, la compra de medicamentos y el funcionamiento de los servicios del proyecto."
                            enlace="/donaciones"
                            textoEnlace="Ir a donaciones"
                        />

                        <CardIcono
                            icono={
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6" />
                                </svg>
                            }
                            titulo="Voluntariado"
                            descripcion="Puedes colaborar brindando tu tiempo, apoyo en actividades, acompañamiento o participación en jornadas y eventos comunitarios."
                            enlace="#formVoluntariado"
                            textoEnlace="Quiero ser voluntario"
                        />

                        <CardIcono
                            icono={
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m3 11 18-8-8 18-2-8-8-2Zm8 2 4-4" />
                                </svg>
                            }
                            titulo="Difusión"
                            descripcion="Compartir la labor del proyecto con otras personas también ayuda a que más gente conozca la causa y se sume a apoyar."
                            enlace="/blog"
                            textoEnlace="Conocer más"
                        />
                    </div>
                </div>
            </section>

            <section className="seccion fondo-suave">
                <div className="contenedor">
                    <SubTitle
                        subt="¿Cómo funciona el apoyo?"
                        desc="Hemos pensado este proceso de forma sencilla para que cualquier persona pueda colaborar."
                    />

                    <div className="grid-tres-col-ajust">
                        <CardPaso
                            numero="1"
                            titulo="Elige cómo ayudar"
                            descripcion="Decide si deseas colaborar con donaciones, voluntariado o apoyo en actividades del proyecto."
                        />

                        <CardPaso
                            numero="2"
                            titulo="Completa tu información"
                            descripcion="Llena el formulario con tus datos para que podamos conocer tu interés y contactarte."
                        />

                        <CardPaso
                            numero="3"
                            titulo="Nos comunicamos contigo"
                            descripcion="El proyecto podrá ponerse en contacto contigo para darte seguimiento y orientarte."
                        />
                    </div>
                </div>
            </section>

            <section className="seccion seccion-crema">
                <div className="contenedor grid-formulario">
                    <div className="w-full">
                        <h2 className="titulo-grande">Forma parte del cambio</h2>
                        <p className="parrafo-suave mb-4">
                            Ser voluntario es una manera valiosa de contribuir al bienestar de la comunidad. Puedes apoyar en actividades, jornadas, acompañamiento, organización y otras áreas según la necesidad del proyecto.
                        </p>
                        <p className="parrafo-suave mb-6">
                            Completa este formulario si deseas que te tomemos en cuenta como posible voluntario o voluntaria.
                        </p>

                        <div className="lista-checks">
                            <p><span>✔</span> Apoyo en actividades comunitarias</p>
                            <p><span>✔</span> Participación en jornadas o eventos</p>
                            <p><span>✔</span> Tiempo y servicio a favor de la comunidad</p>
                        </div>
                    </div>

                    <Formulario
                        id="formVoluntariado"
                        titulo="Formulario de voluntariado"
                        textoBoton="Enviar solicitud"
                        campos={camposVoluntariado}
                        className="w-full"
                    />
                </div>
            </section>
        </>
    )
}

export default ComoAyudar
