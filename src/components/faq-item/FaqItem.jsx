import { useState } from "react"

const FaqItem = ({ pregunta, respuesta, abierta = false }) => {
    const [mostrar, setMostrar] = useState(abierta)

    return (
        <article className="rounded-2xl border border-stone-200 bg-white shadow-md">
            <button
                type="button"
                onClick={() => setMostrar(!mostrar)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-lg font-bold text-neutral-800"
            >
                {pregunta}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xl text-orange-500">
                    {mostrar ? "−" : "+"}
                </span>
            </button>

            {mostrar && (
                <div className="border-t border-stone-200 px-6 pb-6 pt-4 leading-relaxed text-neutral-500">
                    <p>{respuesta}</p>
                </div>
            )}
        </article>
    )
}

export default FaqItem
