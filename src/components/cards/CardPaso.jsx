const CardPaso = ({ numero, titulo, descripcion }) => {
    return (
        <article className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-md">
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">{numero}</span>
            <h3 className="mb-2 text-xl font-bold text-neutral-800">{titulo}</h3>
            <p className="leading-relaxed text-neutral-500">{descripcion}</p>
        </article>
    );
};

export default CardPaso;
