import { Card, CardHeaderImg, CardBody, CardFooter } from '../components/cards'
import { Link } from 'react-router'

const Inicio = () => {

    return (
        <>
            <section className="hero">
                <div className="hero-contenido">
                    <div className="hero-texto">
                        <span className="hero-etiqueta">Atención en salud con compromiso social</span>
                        <h2 className='font-bold'>Apoyando a las comunidades que más lo necesitan</h2>
                        <p>El Proyecto San Francisco de Asís brinda atención en salud a personas de escasos recursos, ofreciendo servicios médicos, laboratorio clínico y apoyo farmacéutico.</p>
                        <div className="hero-botones">
                            <Link to="/nosotros" className="boton boton-principal">Conocer Mas</Link>
                            <Link to="/donaciones" className="boton boton-secundario">Donar ahora</Link>
                        </div>
                    </div>
                    <div className="hero-imagen">
                        <img
                            src='https://picsum.photos/600/350'
                            alt='Imagen Principal del Proyecto'
                        />
                    </div>
                </div>
            </section>
            <section className='seccion fondo-suave'>
                <div className='max-w-[1180px] mx-auto w-[90%]'>
                    <div className='titulo-seccion'>
                        <h2 className='font-bold'>Noticias y eventos recientes</h2>
                    </div>
                    <div className='tarjetas-noticias'>
                        <Card>
                            <CardHeaderImg
                                imgUrl={"https://picsum.photos/400/250"}
                                altText={"Imagen de Noticia 1"}
                            />
                            <CardBody>
                                <h3>Modernización del laboratorio</h3>
                                <Link to="/blog" className='text-[#e97b1e] font-bold'>Leer más</Link>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeaderImg
                                imgUrl={"https://picsum.photos/400/250"}
                                altText={"Imagen de Noticia 2"}
                            />
                            <CardBody>
                                <h3>Próxima jornada o actividad</h3>
                                <Link to="/eventos" className='text-[#e97b1e] font-bold'>Ver eventos</Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Inicio;