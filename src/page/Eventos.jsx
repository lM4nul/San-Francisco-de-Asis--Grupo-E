import { HeroPanel } from "../components/hero-panel";
import { CardHorizontal } from '../components/cards'
import  SubTitle  from '../components/titles/subt'

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



        </>
    )
}

export default Eventos;
