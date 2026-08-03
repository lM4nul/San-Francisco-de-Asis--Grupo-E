import { CardSimple } from '../components/cards'
import HeroPanel from "../components/hero-panel/heropanel";
import Formulario from '../components/formulario/Formulario'

const camposContacto = [
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
        placeholder: "Tu número de teléfono",
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
        nombre: "mensaje",
        etiqueta: "Mensaje",
        tipo: "textarea",
        placeholder: "Escribe tu mensaje",
        anchoCompleto: true,
        validar: (v) => (v.length < 10 ? "Escribe al menos 10 caracteres." : null),
    },
];

const Contacto = () => {
    return (
        <>
            <HeroPanel
                evento="Estamos para ayudarte"
                imagen="img/contactanos.webp"
                titulo="Contáctanos"
                descripcion="Si deseas comunicarte con el proyecto, pedir información o conocer más sobre nuestros servicios y actividades, puedes escribirnos por medio de este formulario."
            />

            <section className="seccion seccion-crema">
                <div className="contenedor grid-formulario">
                    <div className="w-full">
                        <span className="etiqueta-seccion">Información de contacto</span>
                        <h2 className="titulo-grande">Será un gusto atenderte</h2>
                        <p className="parrafo-suave mb-6">
                            Puedes utilizar este espacio para comunicarte con el proyecto por los medios oficiales de contacto y recibir orientación o respuesta a tus consultas.
                        </p>

                        <div className="grid-dos-sm">
                            <CardSimple titulo="Ubicación" descripcion="Reitoca, Francisco Morazán, Honduras" />
                            <CardSimple titulo="Correo electrónico" descripcion="proyecto@sanfrancisco.org" />
                            <CardSimple titulo="Teléfono" descripcion="+504 0000-0000" />
                            <CardSimple titulo="Horario de atención" descripcion="Lunes a viernes de 8:00 a.m. a 4:00 p.m." />
                        </div>
                    </div>

                    <Formulario
                        id="formContacto"
                        titulo="Formulario de contacto"
                        textoBoton="Enviar mensaje"
                        campos={camposContacto}
                        className="w-full"
                    />
                </div>
            </section>
        </>
    )
}

export default Contacto
