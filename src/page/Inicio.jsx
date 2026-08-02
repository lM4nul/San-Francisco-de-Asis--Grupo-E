import { HeroCard } from '../components/hero-panel'
import { PostCard } from '../components/cards'
import  SubTitle  from '../components/titles/subt'
import { Link } from 'react-router'

const Inicio = () => {
    return (
        <>
            <HeroCard
                tag="Atención en salud con compromiso social"
                titulo="Apoyando a las comunidades que más lo necesitan"
                descripcion="El Proyecto San Francisco de Asís brinda atención en salud a personas de escasos recursos, ofreciendo servicios médicos, laboratorio clínico y apoyo farmacéutico."
                imagen="https://picsum.photos/600/350"
            >
                <Link to="/nosotros" className="boton boton-principal">Conocer Mas</Link>
                <Link to="/donaciones" className="boton boton-secundario">Donar ahora</Link>
            </HeroCard>

            <SubTitle subt="Noticias y eventos recientes" />

            <div className="max-w-[1180px] mx-auto w-[90%] tarjetas-noticias">
                <PostCard
                    imgUrl="https://picsum.photos/400/250"
                    altText="Imagen de Noticia 1"
                    titulo="Modernización del laboratorio"
                    enlace="/blog"
                />
                <PostCard
                    imgUrl="https://picsum.photos/400/250"
                    altText="Imagen de Noticia 2"
                    titulo="Próxima jornada o actividad"
                    enlace="/eventos"
                    textoEnlace="Ver eventos"
                />
            </div>
        </>
    )
}

export default Inicio;
