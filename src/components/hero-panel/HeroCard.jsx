const HeroCard = ({ tag, titulo, descripcion, imagen, children, tituloH1 = false }) => {
    const Titulo = tituloH1 ? "h1" : "h2"
    return (
        <section className="py-16 bg-gradient-to-br from-amber-50 to-cyan-50">
            <div className="contenedor-ancho flex flex-col gap-8 items-center lg:flex-row lg:justify-between lg:items-center">

                <div className="w-full lg:w-1/2">
                    <span className="inline-block mb-3 text-orange-500 font-bold text-sm tracking-wide">
                        {tag}
                    </span>
                    <Titulo className="text-5xl leading-tight text-neutral-800 mb-5 max-w-xl font-bold">
                        {titulo}
                    </Titulo>
                    <p className="text-neutral-500 text-base max-w-lg mb-6">
                        {descripcion}
                    </p>

                    {children && (
                        <div className="flex flex-wrap gap-3">
                            {children}
                        </div>
                    )}
                </div>

                <div className="w-full lg:w-1/2 bg-white rounded-3xl overflow-hidden shadow-lg">
                    <img src={imagen} alt={titulo} className="w-full h-80 object-cover" />
                </div>

            </div>
        </section>
    );
};

export default HeroCard;
