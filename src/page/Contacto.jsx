import { CardSimple } from '../components/cards'
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
            <section className="bg-[#fffdf8] py-[75px]">
                <div className="mx-auto flex w-[90%] max-w-[1180px] flex-col items-start gap-[30px] md:flex-row md:justify-between">
                    <div className="w-full md:w-[48%]">
                        <span className="mb-3 inline-block font-bold uppercase tracking-[0.15em] text-[#e97b1e]">Información de contacto</span>
                        <h2 className="mb-4 text-4xl font-bold leading-tight text-[#2b2b2b]">Será un gusto atenderte</h2>
                        <p className="mb-6 leading-relaxed text-[#666666]">
                            Puedes utilizar este espacio para comunicarte con el proyecto por los medios oficiales de contacto y recibir orientación o respuesta a tus consultas.
                        </p>

                        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
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
                        className="w-full md:w-[48%]"
                    />
                </div>
            </section>
        </>
    )
}

export default Contacto
