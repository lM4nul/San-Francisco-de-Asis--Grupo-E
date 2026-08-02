import { HeroPanel } from '../components/hero-panel'
import { PostCard } from '../components/cards'
import  SubTitle  from '../components/titles/subt'


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

            <div className="max-w-6xl mx-auto w-11/12">

                <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200">

                    <img
                        src="https://picsum.photos/700/500"
                        alt="Laboratorio Santa María"
                        className="w-full h-full min-h-88 object-cover"
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
                            className="text-orange-500 font-bold"
                        >
                            Leer artículo completo
                        </a>

                    </div>

                </div>

            </div>

            <SubTitle
                subt="Publicaciones recientes"
                desc="Estas publicaciones presentan parte del trabajo, el impacto y las nuevas iniciativas del Proyecto San Francisco de Asís."
            />

            <div className="max-w-6xl mx-auto w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <PostCard
                    imgUrl="https://picsum.photos/seed/atencion-medica/500/320"
                    altText="Atención médica a la comunidad"
                    tag="Artículo institucional"
                    titulo="Más de 55,000 atenciones médicas que reflejan compromiso social"
                    descripcion="El trabajo acumulado del proyecto muestra el impacto que ha tenido en la salud y bienestar de miles de personas."
                    enlace="#inicio-blog"
                />

                <PostCard
                    imgUrl="https://picsum.photos/seed/nutricion-infantil/500/320"
                    altText="Proyecto de nutrición infantil"
                    tag="Nueva iniciativa"
                    titulo="Proyecto de nutrición infantil busca mejorar la calidad de vida de niños"
                    descripcion="La iniciativa está orientada a evaluación, seguimiento, educación alimentaria y entrega de apoyo nutricional."
                    enlace="#inicio-blog"
                />

                <PostCard
                    imgUrl="https://picsum.photos/seed/salud-rural/500/320"
                    altText="Atención de salud en comunidades rurales"
                    tag="Contexto del proyecto"
                    titulo="Llevar salud a comunidades rurales sigue siendo una necesidad urgente"
                    descripcion="El proyecto nació para responder a una realidad concreta en municipios del sur de Francisco Morazán."
                    enlace="#inicio-blog"
                />

            </div>
        </>
    )
}

export default Blog
