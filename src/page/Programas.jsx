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
                    tag="Atención médica"
                    titulo="Clínica Santa María"
                    descripcion="Área orientada a la consulta médica general, atención externa y apoyo a pacientes que requieren valoración y seguimiento de salud."
                    items={["Consulta general","Atención a pacientes","Orientación básica en salud"]} //si hay una lista poner items, sino no lo agregues
                />

                <CardHorizontal
                    imagen="https://picsum.photos/400/300"
                    tag="Diagnóstico clínico"
                    titulo="Laboratorio Santa María"
                    descripcion="Brinda apoyo por medio de análisis clínicos que permiten fortalecer el diagnóstico, control y seguimiento de los pacientes atendidos."
                    items={["Pruebas de laboratorio","Apoyo al diagnóstico","Seguimiento clínico"]}
                    imagenDerecha //para que la imagen este en la derecha, si lo queres en izquierdas no lo pongas
                />

                <CardHorizontal
                    imagen="https://picsum.photos/400/300"
                    tag="Apoyo farmacéutico"
                    titulo="Farmacia San Francisco de Asís"
                    descripcion="Facilita la dispensación de medicamentos para apoyar el tratamiento de las personas que reciben atención en el proyecto."
                    items={["Entrega de medicamentos","Apoyo al tratamiento","Atención a pacientes"]}
                />

                <CardHorizontal
                    imagen="https://picsum.photos/400/300"
                    tag="Servicio complementario"
                    titulo="Farmacia Candelaria"
                    descripcion="Fortalece el trabajo del proyecto al ampliar la capacidad de apoyo farmacéutico y atención orientada al bienestar comunitario."
                    items={["Apoyo comunitario","Atención farmacéutica","Servicio complementario"]}
                    imagenDerecha 
                />
            </section>


            <section className="bg-[#f8f5ee] py-8">
                <div className="max-w-7xl mx-auto w-11/12">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold">Otras áreas de apoyo</h1>
                        <p>Además de sus áreas principales, el proyecto también ha brindado apoyo en otros servicios enfocados en la salud integral.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <CardSimple titulo="Pediatría" descripcion="Atención orientada al bienestar y seguimiento de la salud infantil." />
                        <CardSimple titulo="Psicología" descripcion="Apoyo emocional y orientación para fortalecer la salud mental de la población." />
                        <CardSimple titulo="Nutrición Clínica" descripcion="Orientación alimentaria y acompañamiento para mejorar hábitos y condiciones de salud" />
                        <CardSimple titulo="Lactancia Materna" descripcion="Educación y acompañamiento para madres y familias en esta etapa importante." />
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
