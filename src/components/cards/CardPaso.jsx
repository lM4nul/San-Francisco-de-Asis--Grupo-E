const CardPaso = ({ numero, titulo, descripcion }) => {
    return (
        <article className="card-paso">
            <span className="circulo-paso">{numero}</span>
            <h3 className="mb-2 text-xl font-bold text-neutral-800">{titulo}</h3>
            <p className="parrafo-suave">{descripcion}</p>
        </article>
    );
};

export default CardPaso;
