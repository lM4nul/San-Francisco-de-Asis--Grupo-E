import { HeroPanel, HeroCard } from '../components/hero-panel'
import { CardHorizontal, CardSimple } from '../components/cards'


const Programas = () => {
    return (
        <>
            <HeroPanel
                evento="Brigadas, jornadas y actividades"
                imagen="https://picsum.photos/1200/400"
                titulo="Nuestros Programas"
                descripcion="Trabajamos para acercar atención en salud a las comunidades que más lo necesitan, por medio de servicios médicos, laboratorio clínico y apoyo farmacéutico."
            />

            <div className="text-center py-4">
                <h1 className="text-3xl font-bold">Áreas principales de atención</h1>
                <p>Estas son las áreas principales mediante las cuales el proyecto brinda apoyo y servicios a la comunidad.</p>
            </div>

            <section className="max-w-[1180px] mx-auto w-[90%] py-8 flex flex-col gap-6">
                
                <CardHorizontal
                    imagen="https://picsum.photos/400/300"
                    tag="Programa de Salud"
                    titulo="Brigadas Médicas"
                    descripcion="Atención médica gratuita en comunidades rurales con profesionales voluntarios."
                    items={["Consultas médicas generales", "Exámenes de laboratorio clínico", "Apoyo farmacéutico"]} //si hay una lista poner items, sino no lo agregues
                />

                <CardHorizontal
                    imagen="https://picsum.photos/400/300"
                    tag="Programa Social"
                    titulo="Apoyo Comunitario"
                    descripcion="Brindamos asistencia a familias en situación de vulnerabilidad."
                    items={["Distribución de alimentos", "Campañas de vacunación", "Capacitación en salud preventiva"]}
                    imagenDerecha //para que la imagen este en la derecha, si lo queres en izquierdas no lo pongas
                />

                <CardHorizontal
                    imagen="https://picsum.photos/400/300"
                    tag="Programa Educativo"
                    titulo="Formación en Salud"
                    descripcion="Programas de educación para promover hábitos saludables en la comunidad."
                    items={["Talleres de nutrición", "Charlas de prevención", "Material educativo"]}
                />
            </section>


            <section className="bg-[#f8f5ee] py-8">
                <div className="max-w-7xl mx-auto w-11/12">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold">Otras áreas de apoyo</h1>
                        <p>Además de sus áreas principales, el proyecto también ha brindado apoyo en otros servicios enfocados en la salud integral.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <CardSimple titulo="Misión" descripcion="Brindar atención en salud..." />
                        <CardSimple titulo="Visión" descripcion="Ser una institución líder..." />
                        <CardSimple titulo="Valores" descripcion="Compromiso, solidaridad..." />
                        <CardSimple titulo="Objetivo" descripcion="Fortalecer la salud comunitaria..." />
                    </div>
                </div>
            </section>

            <HeroCard
                tag="Compromiso con la comunidad"
                titulo="Programas pensados para responder a necesidades reales"
                descripcion="Cada área del proyecto trabaja con un mismo propósito: acercar servicios de salud dignos, accesibles y humanos a personas que muchas veces no cuentan con los recursos necesarios para recibir atención. 
De esta forma, el proyecto busca no solo atender enfermedades, sino también acompañar a la población, orientar a las familias y fortalecer el bienestar comunitario."
                imagen="https://picsum.photos/600/350" />

        </>


    )
}

export default Programas;
