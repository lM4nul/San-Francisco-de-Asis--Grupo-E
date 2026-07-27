const CardSimple = ({ titulo, descripcion }) => {
    return (
        <div className="flex flex-col gap-2 p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-orange-400 text-lg md:text-xl font-bold">{titulo}</h3>
            <p className="text-gray-600 text-sm md:text-base">{descripcion}</p>
        </div>
    );
};

export default CardSimple;
