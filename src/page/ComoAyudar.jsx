import { useState } from "react"
import { Link } from "react-router"

const ComoAyudar = () => {
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState("")
    const [enviado, setEnviado] = useState(false)

    const enviarFormulario = (evento) => {
        evento.preventDefault()

        const formulario = evento.currentTarget
        const datos = new FormData(formulario)
        const nombre = datos.get("nombre").trim()
        const telefono = datos.get("telefono").trim()
        const correo = datos.get("correo").trim()
        const motivo = datos.get("motivo").trim()
        const nuevosErrores = {}

        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{3,}$/.test(nombre)) {
            nuevosErrores.nombre = "Escribe un nombre válido."
        }

        if (!/^(?:\+504\s?)?\d{4}-?\d{4}$/.test(telefono)) {
            nuevosErrores.telefono = "Escribe un teléfono válido."
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            nuevosErrores.correo = "Escribe un correo válido."
        }

        if (motivo.length < 10) {
            nuevosErrores.motivo = "Escribe al menos 10 caracteres."
        }

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores)
            setMensaje("Revisa los campos marcados e inténtalo de nuevo.")
            setEnviado(false)
            return
        }

        setErrores({})
        setMensaje("Tu solicitud fue enviada correctamente.")
        setEnviado(true)
        formulario.reset()
    }

    const claseCampo = (campo) => {
        const base = "w-full rounded-[14px] border bg-[#fcfbf7] px-4 py-3.5 text-base outline-none transition focus:bg-white"
        return errores[campo]
            ? `${base} border-red-600 focus:border-red-600`
            : `${base} border-[#e3dfd6] focus:border-[#67c9cf]`
    }

    return (
        <>
            <section className="relative flex min-h-[420px] items-center overflow-hidden md:min-h-[500px]">
                <img
                    src="https://picsum.photos/id/1059/1600/700"
                    alt="Personas colaborando con la comunidad"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 mx-auto w-[90%] max-w-[1180px] py-20 text-white">
                    <div className="max-w-[700px]">
                        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                            ¿Cómo puedes ayudar?
                        </h1>
                        <p className="max-w-[620px] text-base leading-relaxed text-neutral-100 md:text-lg">
                            Existen diferentes maneras de apoyar al Proyecto San Francisco de Asís. Tu ayuda puede convertirse en atención médica, estudios clínicos, medicamentos y acompañamiento para muchas familias.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#fffdf8] py-[75px]">
                <div className="mx-auto w-[90%] max-w-[1180px]">
                    <div className="mb-9 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-[#2b2b2b]">Formas de colaborar</h2>
                        <p className="mx-auto max-w-[760px] text-[#666666]">
                            Puedes apoyar esta labor social de distintas maneras, según tus posibilidades y tu disponibilidad.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
                        <article className="rounded-[22px] border border-[#ebe6dc] bg-white p-[26px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef9fb] text-[#e97b1e]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21s-7-4.35-9.5-8.5C.5 9.2 2.1 5 6.2 5c2.1 0 3.4 1.2 4.1 2.3C11 6.2 12.3 5 14.4 5c4.1 0 5.7 4.2 3.7 7.5C15.6 16.65 12 21 12 21Z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-[#2b2b2b]">Donaciones</h3>
                            <p className="mb-4 leading-relaxed text-[#666666]">
                                Tu aporte económico puede ayudar a sostener la atención médica, la compra de medicamentos y el funcionamiento de los servicios del proyecto.
                            </p>
                            <Link to="/donaciones" className="font-bold text-[#e97b1e] hover:text-[#d86e17]">
                                Ir a donaciones
                            </Link>
                        </article>

                        <article className="rounded-[22px] border border-[#ebe6dc] bg-white p-[26px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef9fb] text-[#e97b1e]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-[#2b2b2b]">Voluntariado</h3>
                            <p className="mb-4 leading-relaxed text-[#666666]">
                                Puedes colaborar brindando tu tiempo, apoyo en actividades, acompañamiento o participación en jornadas y eventos comunitarios.
                            </p>
                            <a href="#formVoluntariado" className="font-bold text-[#e97b1e] hover:text-[#d86e17]">
                                Quiero ser voluntario
                            </a>
                        </article>

                        <article className="rounded-[22px] border border-[#ebe6dc] bg-white p-[26px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef9fb] text-[#e97b1e]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m3 11 18-8-8 18-2-8-8-2Zm8 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-[#2b2b2b]">Difusión</h3>
                            <p className="mb-4 leading-relaxed text-[#666666]">
                                Compartir la labor del proyecto con otras personas también ayuda a que más gente conozca la causa y se sume a apoyar.
                            </p>
                            <Link to="/blog" className="font-bold text-[#e97b1e] hover:text-[#d86e17]">
                                Conocer más
                            </Link>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f5ee] py-[75px]">
                <div className="mx-auto w-[90%] max-w-[1180px]">
                    <div className="mb-9 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-[#2b2b2b]">¿Cómo funciona el apoyo?</h2>
                        <p className="mx-auto max-w-[760px] text-[#666666]">
                            Hemos pensado este proceso de forma sencilla para que cualquier persona pueda colaborar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <article className="rounded-[20px] border border-[#ebe6dc] bg-white p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                            <span className="mx-auto mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#67c9cf] font-bold text-white">1</span>
                            <h3 className="mb-2 text-xl font-bold text-[#2b2b2b]">Elige cómo ayudar</h3>
                            <p className="leading-relaxed text-[#666666]">
                                Decide si deseas colaborar con donaciones, voluntariado o apoyo en actividades del proyecto.
                            </p>
                        </article>

                        <article className="rounded-[20px] border border-[#ebe6dc] bg-white p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                            <span className="mx-auto mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#67c9cf] font-bold text-white">2</span>
                            <h3 className="mb-2 text-xl font-bold text-[#2b2b2b]">Completa tu información</h3>
                            <p className="leading-relaxed text-[#666666]">
                                Llena el formulario con tus datos para que podamos conocer tu interés y contactarte.
                            </p>
                        </article>

                        <article className="rounded-[20px] border border-[#ebe6dc] bg-white p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                            <span className="mx-auto mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#67c9cf] font-bold text-white">3</span>
                            <h3 className="mb-2 text-xl font-bold text-[#2b2b2b]">Nos comunicamos contigo</h3>
                            <p className="leading-relaxed text-[#666666]">
                                El proyecto podrá ponerse en contacto contigo para darte seguimiento y orientarte.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-[#fffdf8] py-[75px]">
                <div className="mx-auto flex w-[90%] max-w-[1180px] flex-col items-start gap-[30px] md:flex-row md:justify-between">
                    <div className="w-full md:w-[48%]">
                        <h2 className="mb-4 text-4xl font-bold leading-tight text-[#2b2b2b]">Forma parte del cambio</h2>
                        <p className="mb-4 leading-relaxed text-[#666666]">
                            Ser voluntario es una manera valiosa de contribuir al bienestar de la comunidad. Puedes apoyar en actividades, jornadas, acompañamiento, organización y otras áreas según la necesidad del proyecto.
                        </p>
                        <p className="mb-6 leading-relaxed text-[#666666]">
                            Completa este formulario si deseas que te tomemos en cuenta como posible voluntario o voluntaria.
                        </p>

                        <div className="space-y-3 font-bold text-[#2b2b2b]">
                            <p className="flex items-center gap-3"><span className="text-[#67c9cf]">✔</span> Apoyo en actividades comunitarias</p>
                            <p className="flex items-center gap-3"><span className="text-[#67c9cf]">✔</span> Participación en jornadas o eventos</p>
                            <p className="flex items-center gap-3"><span className="text-[#67c9cf]">✔</span> Tiempo y servicio a favor de la comunidad</p>
                        </div>
                    </div>

                    <div className="w-full rounded-3xl border border-[#ebe6dc] bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.07)] md:w-[48%] md:p-8">
                        <h2 className="mb-5 text-3xl font-bold leading-tight text-[#2b2b2b]">Formulario de voluntariado</h2>

                        <form id="formVoluntariado" className="scroll-mt-32" onSubmit={enviarFormulario} noValidate>
                            <div className="grid grid-cols-1 gap-x-[18px] md:grid-cols-2">
                                <div className="mb-[18px]">
                                    <label htmlFor="nombre" className="mb-2 block font-bold text-[#2b2b2b]">Nombre completo</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Escribe tu nombre completo"
                                        className={claseCampo("nombre")}
                                    />
                                    {errores.nombre && <p className="mt-1 text-sm text-red-600">{errores.nombre}</p>}
                                </div>

                                <div className="mb-[18px]">
                                    <label htmlFor="telefono" className="mb-2 block font-bold text-[#2b2b2b]">Teléfono</label>
                                    <input
                                        type="text"
                                        id="telefono"
                                        name="telefono"
                                        placeholder="9999-9999"
                                        className={claseCampo("telefono")}
                                    />
                                    {errores.telefono && <p className="mt-1 text-sm text-red-600">{errores.telefono}</p>}
                                </div>
                            </div>

                            <div className="mb-[18px]">
                                <label htmlFor="correo" className="mb-2 block font-bold text-[#2b2b2b]">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    placeholder="Tu correo electrónico"
                                    className={claseCampo("correo")}
                                />
                                {errores.correo && <p className="mt-1 text-sm text-red-600">{errores.correo}</p>}
                            </div>

                            <div className="mb-[18px]">
                                <label htmlFor="motivo" className="mb-2 block font-bold text-[#2b2b2b]">¿Por qué deseas ayudar?</label>
                                <textarea
                                    id="motivo"
                                    name="motivo"
                                    placeholder="Escribe brevemente por qué deseas formar parte del voluntariado"
                                    className={`${claseCampo("motivo")} min-h-[140px] resize-y`}
                                />
                                {errores.motivo && <p className="mt-1 text-sm text-red-600">{errores.motivo}</p>}
                            </div>

                            <button
                                type="submit"
                                className="cursor-pointer rounded-[14px] bg-[#e97b1e] px-[22px] py-[13px] font-bold text-white transition hover:bg-[#d86e17]"
                            >
                                Enviar solicitud
                            </button>

                            {mensaje && (
                                <p className={`mt-4 font-bold ${enviado ? "text-green-700" : "text-red-600"}`}>
                                    {mensaje}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComoAyudar
