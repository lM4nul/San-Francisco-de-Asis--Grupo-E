import HeroPanel from "../components/hero-panel/heropanel";
import SubTitle from "../components/titles/subt";
import CardSimple from '../components/cards/CardSimple'
import Formulario from '../components/formulario/Formulario'

const camposDonacion = [
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
        nombre: "comentario",
        etiqueta: "Mensaje o detalle de tu apoyo",
        tipo: "textarea",
        placeholder: "Escribe un mensaje breve sobre tu donación o tu interés en apoyar",
        anchoCompleto: true,
        validar: (v) => (v.length < 10 ? "Escribe al menos 10 caracteres." : null),
    },
];


const Donaciones = () => {
    return (
        <>

            <HeroPanel
                evento="Tu ayuda puede transformar vidas"
                imagen="img/donacion.webp"
                titulo="Donaciones"
                descripcion="Cada aporte ayuda a fortalecer la atención médica, los estudios clínicos, el acceso a medicamentos y el acompañamiento a familias que más lo necesitan."
            />

            <SubTitle
                subt="¿Qué apoyan las donaciones?"
                desc="Las contribuciones permiten sostener diferentes áreas del proyecto y responder a necesidades reales de la comunidad."
            />


            <div className="max-w-7xl mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CardSimple titulo="Atención médica" descripcion="Ayuda a fortalecer consultas, jornadas comunitarias y actividades de acompañamiento en salud." />
                <CardSimple titulo="Laboratorio clínico" descripcion="Contribuye a la realización de estudios y al apoyo diagnóstico para pacientes de la zona." />
                <CardSimple titulo="Medicamentos" descripcion="Permite apoyar a personas y familias que necesitan tratamiento y no siempre cuentan con recursos." />
            </div>

            <section className="bg-orange-50 py-20">
                <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="w-full">
                        <span className="mb-3 inline-block font-bold uppercase tracking-widest text-orange-500">Aporte con propósito</span>
                        <h2 className="mb-4 text-4xl font-bold leading-tight text-neutral-800">Tu donación suma esperanza y bienestar</h2>
                        <p className="mb-4 leading-relaxed text-neutral-500">
                            Apoyar este proyecto es una manera de colaborar con una labor social que busca acercar servicios de salud dignos, accesibles y humanos a comunidades vulnerables.
                        </p>
                        <p className="mb-6 leading-relaxed text-neutral-500">
                            Puedes realizar aportes económicos, apoyo en especie o manifestar tu interés para recibir información sobre futuras campañas de ayuda.
                        </p>

                        <div className="space-y-3 font-bold text-neutral-800">
                            <p className="flex items-center gap-3"><span className="text-cyan-500">✔</span> Apoyo a servicios médicos</p>
                            <p className="flex items-center gap-3"><span className="text-cyan-500">✔</span> Fortalecimiento del laboratorio</p>
                            <p className="flex items-center gap-3"><span className="text-cyan-500">✔</span> Medicamentos y atención comunitaria</p>
                        </div>
                    </div>

                    <Formulario
                        id="formDonaciones"
                        titulo="Formulario de donación"
                        textoBoton="Enviar información"
                        campos={camposDonacion}
                        className="w-full"
                    />
                </div>
            </section>

        </>
    )
}

export default Donaciones;
