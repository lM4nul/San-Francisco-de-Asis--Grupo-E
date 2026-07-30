import { HeroPanel } from '../components/hero-panel'
import {
    Card,
    CardHeaderImg,
    CardBody
} from '../components/cards'


const Blog = () => {

    return (
        <>
            <div id="inicio-blog">

                <HeroPanel
                    evento="Noticias, artículos y avances"
                    imagen="https://picsum.photos/1200/400"
                    titulo="Blog del Proyecto"
                    descripcion="En este espacio compartimos acontecimientos importantes, información sobre nuestros servicios y nuevas iniciativas orientadas al bienestar comunitario."
                />

            </div>

            <section className="py-12">

                <div className="max-w-[1180px] mx-auto w-[90%]">

                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200">

                        <img
                            src="https://picsum.photos/700/500"
                            alt="Laboratorio Santa María"
                            className="w-full h-full min-h-[350px] object-cover"
                        />

                        <div className="flex flex-col justify-center p-8 md:p-10">

                            <p className="text-cyan-500 font-bold mb-4">
                                Noviembre 2023
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                                Modernización del Laboratorio Santa María fortalece
                                la atención comunitaria
                            </h2>

                            <p className="text-neutral-600 leading-7 mb-6">
                                La mejora y equipamiento del laboratorio representa
                                un paso importante para ampliar la capacidad diagnóstica
                                y ofrecer un mejor servicio a la población beneficiada
                                por el proyecto.
                            </p>

                            <a
                                href="#inicio-blog"
                                className="text-[#e97b1e] font-bold"
                            >
                                Leer artículo completo
                            </a>

                        </div>

                    </div>

                </div>

            </section>

            <section className="bg-[#f8f5ee] py-12">

                <div className="max-w-[1180px] mx-auto w-[90%]">

                    <div className="text-center mb-10">

                        <h2 className="text-3xl font-bold mb-3">
                            Publicaciones recientes
                        </h2>

                        <p className="max-w-3xl mx-auto text-neutral-600">
                            Estas publicaciones presentan parte del trabajo, el impacto
                            y las nuevas iniciativas del Proyecto San Francisco de Asís.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <Card>

                            <CardHeaderImg
                                imgUrl="https://picsum.photos/seed/atencion-medica/500/320"
                                altText="Atención médica a la comunidad"
                            />

                            <CardBody>

                                <p className="text-cyan-500 font-bold">
                                    Artículo institucional
                                </p>

                                <h3 className="text-2xl font-bold leading-tight">
                                    Más de 55,000 atenciones médicas que reflejan
                                    compromiso social
                                </h3>

                                <p className="text-neutral-600 leading-7">
                                    El trabajo acumulado del proyecto muestra el impacto
                                    que ha tenido en la salud y bienestar de miles de
                                    personas.
                                </p>

                                <a
                                    href="#inicio-blog"
                                    className="text-[#e97b1e] font-bold"
                                >
                                    Leer más
                                </a>

                            </CardBody>

                        </Card>

                        <Card>

                            <CardHeaderImg
                                imgUrl="https://picsum.photos/seed/nutricion-infantil/500/320"
                                altText="Proyecto de nutrición infantil"
                            />

                            <CardBody>

                                <p className="text-cyan-500 font-bold">
                                    Nueva iniciativa
                                </p>

                                <h3 className="text-2xl font-bold leading-tight">
                                    Proyecto de nutrición infantil busca mejorar
                                    la calidad de vida de niños
                                </h3>

                                <p className="text-neutral-600 leading-7">
                                    La iniciativa está orientada a evaluación,
                                    seguimiento, educación alimentaria y entrega
                                    de apoyo nutricional.
                                </p>

                                <a
                                    href="#inicio-blog"
                                    className="text-[#e97b1e] font-bold"
                                >
                                    Leer más
                                </a>

                            </CardBody>

                        </Card>

                        <Card>

                            <CardHeaderImg
                                imgUrl="https://picsum.photos/seed/salud-rural/500/320"
                                altText="Atención de salud en comunidades rurales"
                            />

                            <CardBody>

                                <p className="text-cyan-500 font-bold">
                                    Contexto del proyecto
                                </p>

                                <h3 className="text-2xl font-bold leading-tight">
                                    Llevar salud a comunidades rurales sigue siendo
                                    una necesidad urgente
                                </h3>

                                <p className="text-neutral-600 leading-7">
                                    El proyecto nació para responder a una realidad
                                    concreta en municipios del sur de Francisco Morazán.
                                </p>

                                <a
                                    href="#inicio-blog"
                                    className="text-[#e97b1e] font-bold"
                                >
                                    Leer más
                                </a>

                            </CardBody>

                        </Card>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Blog