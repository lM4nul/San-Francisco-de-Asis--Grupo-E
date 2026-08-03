import { HeroPanel } from "../components/hero-panel"
import { CardSimple } from "../components/cards"
import SubTitle from "../components/titles/subt"

const equipo = [
    {
        imagen: "/img/nosotros/equipo-1.webp",
        cargo: "Director ejecutivo y médico asistencial",
        nombre: "Dr. Marco Mejía",
    },
    {
        imagen: "/img/nosotros/equipo-2.webp",
        cargo: "Enfermera auxiliar",
        nombre: "Cristibel Córdova",
    },
    {
        imagen: "/img/nosotros/equipo-4.webp",
        cargo: "Regente de laboratorio",
        nombre: "Dra. Margarita Zúniga",
    },
    {
        imagen: "/img/nosotros/equipo-3.webp",
        cargo: "Auxiliar de laboratorio",
        nombre: "Miguel Ángel Zelaya",
    },
]

const Nosotros = () => {
    return (
        <>
    
            <HeroPanel
                evento="Conoce sobre nuestra labor"
                imagen="/img/nosotros/nosotros-banner.webp"
                titulo="Acerca de Nosotros"
                descripcion="Somos un proyecto de asistencia social y salud sin fines de lucro, comprometido con el bienestar de las comunidades más necesitadas del sur de Francisco Morazán."
            />

        
            <section className="bg-orange-50 py-20">
                <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <img
                        src="/img/nosotros/historia-proyecto.webp"
                        alt="Historia del Proyecto San Francisco de Asís"
                        className="h-80 w-full rounded-3xl object-cover shadow-md"
                    />

                    <div>
                        <span className="mb-3 inline-block font-bold text-orange-500">
                            Nuestra historia
                        </span>

                        <h2 className="mb-5 text-3xl font-bold text-neutral-800 md:text-4xl">
                            Un proyecto nacido para servir
                        </h2>

                        <div className="space-y-4 leading-relaxed text-neutral-600">
                            <p>
                                El Proyecto San Francisco de Asís es una iniciativa
                                de asistencia social sin fines de lucro perteneciente
                                a la Iglesia Católica de Honduras y administrada por
                                la Parroquia San Francisco de Asís de Reitoca.
                            </p>

                            <p>
                                Fue fundado el 15 de octubre de 2012 con el propósito
                                de acercar servicios de salud a personas de escasos
                                recursos económicos que viven en municipios del sur
                                de Francisco Morazán.
                            </p>

                            <p>
                                Desde su creación, el proyecto ha trabajado para
                                brindar atención digna, accesible y humana,
                                convirtiéndose en un apoyo importante para muchas
                                familias de la zona.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="bg-stone-100 py-20">
                <div className="mx-auto w-11/12 max-w-6xl">
                    <SubTitle
                        subt="Misión y visión"
                        desc="Nuestra labor está guiada por el compromiso de servir con calidad, solidaridad y vocación humana."
                    />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <CardSimple
                            titulo="Misión"
                            descripcion="Brindar servicios de atención en salud con calidad a personas de escasos recursos económicos, poniendo a su disposición personal capacitado, equipo médico, servicios de laboratorio e insumos que contribuyan a mejorar su bienestar."
                        />

                        <CardSimple
                            titulo="Visión"
                            descripcion="Desarrollar un programa de asistencia social mediante unidades de salud autosostenibles y con capacidad para formar una red de servicios médicos integrales que responda de manera oportuna a las necesidades de la población."
                        />
                    </div>
                </div>
            </section>

        
            <section className="bg-orange-50 py-20">
                <div className="mx-auto w-11/12 max-w-6xl">
                    <SubTitle
                        subt="Nuestros valores"
                        desc="Estos principios orientan nuestro trabajo diario y la manera en que servimos a cada persona."
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <CardSimple
                            titulo="Solidaridad"
                            descripcion="Trabajamos pensando en quienes más necesitan apoyo y atención."
                        />

                        <CardSimple
                            titulo="Compromiso"
                            descripcion="Asumimos nuestra labor con responsabilidad, entrega y constancia."
                        />

                        <CardSimple
                            titulo="Respeto"
                            descripcion="Atendemos a cada persona con dignidad, empatía y trato humano."
                        />

                        <CardSimple
                            titulo="Servicio"
                            descripcion="Buscamos brindar ayuda útil, cercana y orientada al bienestar comunitario."
                        />
                    </div>
                </div>
            </section>

            
            <section className="bg-stone-100 py-20">
                <div className="mx-auto w-11/12 max-w-6xl">
                    <SubTitle
                        subt="Nuestro equipo"
                        desc="Personas comprometidas con brindar atención y servicio de calidad a la comunidad."
                    />

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {equipo.map((integrante) => (
                            <article
                                key={integrante.nombre}
                                className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md transition-transform duration-300 hover:-translate-y-1"
                            >
                                <img
                                    src={integrante.imagen}
                                    alt={`${integrante.cargo}: ${integrante.nombre}`}
                                    className="h-80 w-full object-cover object-top"
                                />

                                <div className="p-5 text-center">
                                    <h3 className="mb-2 font-bold capitalize text-neutral-800">
                                        {integrante.cargo}
                                    </h3>

                                    <p className="text-sm text-neutral-500">
                                        {integrante.nombre}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nosotros