import { Link } from "react-router"
import  Formulario  from '../components/formulario/Formulario'

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
            <section className="relative flex min-h-105 items-center overflow-hidden md:min-h-125">
                <img
                    src="https://picsum.photos/id/1059/1600/700"
                    alt="Personas colaborando con la comunidad"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 mx-auto w-11/12 max-w-6xl py-20 text-white">
                    <div className="max-w-2xl">
                        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                            ¿Cómo puedes ayudar?
                        </h1>
                        <p className="max-w-xl text-base leading-relaxed text-neutral-100 md:text-lg">
                            Existen diferentes maneras de apoyar al Proyecto San Francisco de Asís. Tu ayuda puede convertirse en atención médica, estudios clínicos, medicamentos y acompañamiento para muchas familias.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-orange-50 py-20">
                <div className="mx-auto w-11/12 max-w-6xl">
                    <div className="mb-9 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-neutral-800">Formas de colaborar</h2>
                        <p className="mx-auto max-w-3xl text-neutral-500">
                            Puedes apoyar esta labor social de distintas maneras, según tus posibilidades y tu disponibilidad.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-md transition hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-orange-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21s-7-4.35-9.5-8.5C.5 9.2 2.1 5 6.2 5c2.1 0 3.4 1.2 4.1 2.3C11 6.2 12.3 5 14.4 5c4.1 0 5.7 4.2 3.7 7.5C15.6 16.65 12 21 12 21Z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-neutral-800">Donaciones</h3>
                            <p className="mb-4 leading-relaxed text-neutral-500">
                                Tu aporte económico puede ayudar a sostener la atención médica, la compra de medicamentos y el funcionamiento de los servicios del proyecto.
                            </p>
                            <Link to="/donaciones" className="font-bold text-orange-500 hover:text-orange-600">
                                Ir a donaciones
                            </Link>
                        </article>

                        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-md transition hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-orange-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-neutral-800">Voluntariado</h3>
                            <p className="mb-4 leading-relaxed text-neutral-500">
                                Puedes colaborar brindando tu tiempo, apoyo en actividades, acompañamiento o participación en jornadas y eventos comunitarios.
                            </p>
                            <a href="#formVoluntariado" className="font-bold text-orange-500 hover:text-orange-600">
                                Quiero ser voluntario
                            </a>
                        </article>

                        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-md transition hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-orange-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m3 11 18-8-8 18-2-8-8-2Zm8 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-neutral-800">Difusión</h3>
                            <p className="mb-4 leading-relaxed text-neutral-500">
                                Compartir la labor del proyecto con otras personas también ayuda a que más gente conozca la causa y se sume a apoyar.
                            </p>
                            <Link to="/blog" className="font-bold text-orange-500 hover:text-orange-600">
                                Conocer más
                            </Link>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-stone-100 py-20">
                <div className="mx-auto w-11/12 max-w-6xl">
                    <div className="mb-9 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-neutral-800">¿Cómo funciona el apoyo?</h2>
                        <p className="mx-auto max-w-3xl text-neutral-500">
                            Hemos pensado este proceso de forma sencilla para que cualquier persona pueda colaborar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-md">
                            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">1</span>
                            <h3 className="mb-2 text-xl font-bold text-neutral-800">Elige cómo ayudar</h3>
                            <p className="leading-relaxed text-neutral-500">
                                Decide si deseas colaborar con donaciones, voluntariado o apoyo en actividades del proyecto.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-md">
                            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">2</span>
                            <h3 className="mb-2 text-xl font-bold text-neutral-800">Completa tu información</h3>
                            <p className="leading-relaxed text-neutral-500">
                                Llena el formulario con tus datos para que podamos conocer tu interés y contactarte.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-md">
                            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">3</span>
                            <h3 className="mb-2 text-xl font-bold text-neutral-800">Nos comunicamos contigo</h3>
                            <p className="leading-relaxed text-neutral-500">
                                El proyecto podrá ponerse en contacto contigo para darte seguimiento y orientarte.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-orange-50 py-20">
                <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="w-full">
                        <h2 className="mb-4 text-4xl font-bold leading-tight text-neutral-800">Forma parte del cambio</h2>
                        <p className="mb-4 leading-relaxed text-neutral-500">
                            Ser voluntario es una manera valiosa de contribuir al bienestar de la comunidad. Puedes apoyar en actividades, jornadas, acompañamiento, organización y otras áreas según la necesidad del proyecto.
                        </p>
                        <p className="mb-6 leading-relaxed text-neutral-500">
                            Completa este formulario si deseas que te tomemos en cuenta como posible voluntario o voluntaria.
                        </p>

                        <div className="space-y-3 font-bold text-neutral-800">
                            <p className="flex items-center gap-3"><span className="text-cyan-500">✔</span> Apoyo en actividades comunitarias</p>
                            <p className="flex items-center gap-3"><span className="text-cyan-500">✔</span> Participación en jornadas o eventos</p>
                            <p className="flex items-center gap-3"><span className="text-cyan-500">✔</span> Tiempo y servicio a favor de la comunidad</p>
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
