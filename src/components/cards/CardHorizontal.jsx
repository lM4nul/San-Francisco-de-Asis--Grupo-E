const CardHorizontal = ({ imagen, tag, titulo, descripcion, items, imagenDerecha = false, fecha

 }) => {
    return (
        <div className={`flex flex-col ${imagenDerecha ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg overflow-hidden shadow-md`}>
            <img
                src={imagen}
                alt={titulo}
                className="w-full md:w-2/5 h-48 md:h-auto object-cover"
            />

            <div className="flex flex-col justify-center p-4 md:p-6 gap-2 md:w-3/5">
                <p className="text-cyan-500 text-sm font-semibold">{tag}</p>
                <h3 className="text-xl md:text-2xl font-bold">{titulo}</h3>
                {fecha && <p className="text-neutral-500 text-sm">{fecha}</p>}
                <p className="text-gray-600 text-sm md:text-base">{descripcion}</p>

                {items && items.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base mt-2">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CardHorizontal;
