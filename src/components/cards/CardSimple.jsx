const CardSimple = ({ titulo, descripcion }) => {
    return (
        <div className="card-simple">
            <h3 className="text-orange-400 text-lg md:text-xl font-bold">{titulo}</h3>
            <p className="text-gray-600 text-sm md:text-base">{descripcion}</p>
        </div>
    );
};

export default CardSimple;
