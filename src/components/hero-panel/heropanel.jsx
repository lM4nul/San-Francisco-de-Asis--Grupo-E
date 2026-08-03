const HeroPanel = ({ evento ,imagen, titulo, descripcion }) => {
    return (
        <section
            className="relative w-full h-70 md:h-64 lg:h-80 bg-cover bg-center flex items-center mb-5"
            style={{ backgroundImage: `url(${imagen})` }}
        >
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 text-left text-white px-6 md:px-12 lg:px-20">
                <p className="text-sm md:text-lg lg:text-xl mt-2 text-amber-300" >{evento}</p>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">{titulo}</h2>
                <p className="text-sm md:text-lg lg:text-xl mt-2">{descripcion}</p>
            </div>
        </section>
    );
};

export default HeroPanel;
