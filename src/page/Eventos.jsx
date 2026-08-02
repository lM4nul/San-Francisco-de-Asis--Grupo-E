import { HeroPanel } from "../components/hero-panel";
import { CardHorizontal } from '../components/cards'
import  SubTitle  from '../components/titles/subt'
import {PostCard} from "../components/cards";
import  LineaEventos  from '../components/linea-eventos/LineaEventos'

const actividades = [
    {
        fecha: "7 de noviembre de 2023",
        titulo: "Reinauguración del Laboratorio Santa María",
        descripcion: "Ceremonia realizada para mostrar el fortalecimiento del laboratorio y agradecer el apoyo recibido para su modernización.",
    },
    {
        fecha: "2022 - 2024",
        titulo: "Proceso de modernización y equipamiento del laboratorio",
        descripcion: "Período de mejoras orientado a aumentar la capacidad de análisis y fortalecer la atención a pacientes.",
    },
    {
        fecha: "Nueva iniciativa",
        titulo: "Diseño del programa de nutrición infantil",
        descripcion: "Proyecto orientado a evaluaciones nutricionales, educación alimentaria y apoyo a niños de comunidades del sur de Francisco Morazán.",
    },
];

const Eventos = () => {
    return (
        <>

            <HeroPanel
                tag="Brigadas, jornadas y actividades"
                titulo="Eventos del Proyecto"
                descripcion="En este espacio compartimos brigadas médicas, jornadas comunitarias, actividades educativas y eventos importantes relacionados con la labor del proyecto."
                imagen="https://picsum.photos/600/350"
            />

            <SubTitle
                subt="Actividad destacada"
                desc="Un espacio para resaltar una brigada, jornada o actividad importante del proyecto."
            />

            <div className="max-w-[1180px] mx-auto w-[90%] flex flex-col gap-6">

                <CardHorizontal
                    imagen="https://picsum.photos/400/300"
                    tag="Actividad realizada"
                    titulo="Reinauguración del Laboratorio Santa María"
                    fecha="7 de noviembre de 2023 · Reitoca, Francisco Morazán"
                    descripcion="La ceremonia de reinauguración del Laboratorio Santa María y la develación de la placa de agradecimiento marcaron un momento importante para el fortalecimiento de los servicios brindados por el proyecto.
Esta actividad representó el impacto del proceso de modernización y equipamiento del laboratorio, orientado a mejorar la atención y la capacidad diagnóstica para beneficio de la comunidad."
                />

            </div>

            <SubTitle
                subt="Próximas brigadas y jornadas"
                desc="Aquí puedes colocar las actividades futuras del proyecto. Te las dejo listas para que solo cambies fecha o detalles cuando los tengas."
            />

            <div className="max-w-[1180px] mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <PostCard
                    titulo="Brigada médica comunitaria"
                    descripcion="Jornada orientada a brindar atención básica, valoración médica y acompañamiento a personas de la comunidad."

                />

                <PostCard
                    titulo="Más de 55,000 atenciones médicas que reflejan compromiso social"
                    descripcion="El trabajo acumulado del proyecto muestra el impacto que ha tenido en la salud y bienestar de miles de personas."  
                />

                <PostCard
                    titulo="Más de 55,000 atenciones médicas que reflejan compromiso social"
                    descripcion="El trabajo acumulado del proyecto muestra el impacto que ha tenido en la salud y bienestar de miles de personas."
                />

            </div>


            <SubTitle
                subt="Actividades realizadas"
                desc="Un resumen de algunas actividades importantes que han formado parte del trabajo del proyecto."
            />

            <div className="max-w-[1180px] mx-auto w-[90%]">
                <LineaEventos items={actividades} />
            </div>


        </>
    )
}

export default Eventos;
