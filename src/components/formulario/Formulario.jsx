import { useState } from "react"

const Formulario = ({
    id = "formulario",
    titulo = "Formulario",
    textoBoton = "Enviar",
    campos = [],
    mensajeExito = "Tu solicitud fue enviada correctamente.",
    mensajeError = "Revisa los campos marcados e inténtalo de nuevo.",
    onExito,
    className = "",
}) => {
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState("")
    const [enviado, setEnviado] = useState(false)

    const enviarFormulario = (evento) => {
        evento.preventDefault()

        const formulario = evento.currentTarget
        const datos = new FormData(formulario)
        const nuevosErrores = {}

        campos.forEach((campo) => {
            const valor = (datos.get(campo.nombre) ?? "").trim()
            const error = campo.validar
                ? campo.validar(valor)
                : valor
                    ? null
                    : "Este campo es obligatorio."

            if (error) nuevosErrores[campo.nombre] = error
        })

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores)
            setMensaje(mensajeError)
            setEnviado(false)
            return
        }

        setErrores({})
        setMensaje(mensajeExito)
        setEnviado(true)
        formulario.reset()
        if (onExito) onExito()
    }

    const claseCampo = (campo) => {
        const base = "w-full rounded-xl border bg-stone-50 px-4 py-3.5 text-base outline-none transition focus:bg-white"
        return errores[campo]
            ? `${base} border-red-600 focus:border-red-600`
            : `${base} border-stone-300 focus:border-cyan-500`
    }

    return (
        <div className={`w-full rounded-3xl border border-stone-200 bg-white p-6 shadow-lg md:p-8 ${className}`}>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-neutral-800">{titulo}</h2>

            <form id={id} className="scroll-mt-32" onSubmit={enviarFormulario} noValidate>
                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                    {campos.map((campo) => (
                        <div
                            key={campo.nombre}
                            className={`mb-4 ${campo.anchoCompleto ? "md:col-span-2" : ""}`}
                        >
                            <label htmlFor={campo.nombre} className="mb-2 block font-bold text-neutral-800">
                                {campo.etiqueta}
                            </label>

                            {campo.tipo === "textarea" ? (
                                <textarea
                                    id={campo.nombre}
                                    name={campo.nombre}
                                    placeholder={campo.placeholder}
                                    className={`${claseCampo(campo.nombre)} min-h-36 resize-y`}
                                />
                            ) : (
                                <input
                                    type={campo.tipo ?? "text"}
                                    id={campo.nombre}
                                    name={campo.nombre}
                                    placeholder={campo.placeholder}
                                    className={claseCampo(campo.nombre)}
                                />
                            )}

                            {errores[campo.nombre] && (
                                <p className="mt-1 text-sm text-red-600">{errores[campo.nombre]}</p>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="cursor-pointer rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white transition hover:bg-orange-600"
                >
                    {textoBoton}
                </button>

                {mensaje && (
                    <p className={`mt-4 font-bold ${enviado ? "text-green-700" : "text-red-600"}`}>
                        {mensaje}
                    </p>
                )}
            </form>
        </div>
    )
}

export default Formulario
