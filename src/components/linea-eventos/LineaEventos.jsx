const LineaEventos = ({ items }) => {
    return (
        <div className="relative">
            <div className="absolute left-2 top-1 bottom-1 w-0.5 bg-orange-500" />
            <div className="flex flex-col gap-8">
                {items.map((item) => (
                    <article key={item.titulo} className="relative pl-10">
                        <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-orange-500" />
                        <div>
                            <span className="text-sm font-bold text-cyan-500">{item.fecha}</span>
                            <h3 className="text-xl font-bold text-neutral-800">{item.titulo}</h3>
                            <p className="text-neutral-600">{item.descripcion}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default LineaEventos;
