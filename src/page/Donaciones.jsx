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
                imagen="https://picsum.photos/1200/400"
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

            <section className="bg-[#fffdf8] py-[75px]">
                <div className="mx-auto flex w-[90%] max-w-[1180px] flex-col items-start gap-[30px] md:flex-row md:justify-between">
                    <div className="w-full md:w-[48%]">
                        <span className="mb-3 inline-block font-bold uppercase tracking-[0.15em] text-[#e97b1e]">Aporte con propósito</span>
                        <h2 className="mb-4 text-4xl font-bold leading-tight text-[#2b2b2b]">Tu donación suma esperanza y bienestar</h2>
                        <p className="mb-4 leading-relaxed text-[#666666]">
                            Apoyar este proyecto es una manera de colaborar con una labor social que busca acercar servicios de salud dignos, accesibles y humanos a comunidades vulnerables.
                        </p>
                        <p className="mb-6 leading-relaxed text-[#666666]">
                            Puedes realizar aportes económicos, apoyo en especie o manifestar tu interés para recibir información sobre futuras campañas de ayuda.
                        </p>

                        <div className="space-y-3 font-bold text-[#2b2b2b]">
                            <p className="flex items-center gap-3"><span className="text-[#67c9cf]">✔</span> Apoyo a servicios médicos</p>
                            <p className="flex items-center gap-3"><span className="text-[#67c9cf]">✔</span> Fortalecimiento del laboratorio</p>
                            <p className="flex items-center gap-3"><span className="text-[#67c9cf]">✔</span> Medicamentos y atención comunitaria</p>
                        </div>
                    </div>

                    <Formulario
                        id="formDonaciones"
                        titulo="Formulario de donación"
                        textoBoton="Enviar información"
                        campos={camposDonacion}
                        className="w-full md:w-[48%]"
                    />
                </div>
            </section>

        </>
    )
}

export default Donaciones;
