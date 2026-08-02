import HeroPanel from "../components/hero-panel/heropanel";
import FaqItem from '../components/faq-item/FaqItem'

const Faq = () => {
    return (
        <>
            <HeroPanel
                evento="Dudas frecuentes"
                imagen="https://picsum.photos/1200/400"
                titulo="Preguntas Frecuentes"
                descripcion="En esta sección encontrarás respuestas rápidas sobre el proyecto, sus servicios y las formas en que puedes apoyar."
            />

            <section className="bg-orange-50 py-20">
                <div className="mx-auto w-11/12 max-w-6xl">
                    <div className="mb-9 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-neutral-800">Resolvemos tus dudas</h2>
                    </div>

                    <div className="mx-auto max-w-4xl space-y-4">
                        <FaqItem
                            pregunta="¿Qué es el Proyecto San Francisco de Asís?"
                            respuesta="Es un proyecto de asistencia social y salud sin fines de lucro que brinda apoyo a personas de escasos recursos en comunidades del sur de Francisco Morazán."
                        />

                        <FaqItem
                            pregunta="¿Qué servicios ofrece el proyecto?"
                            respuesta="El proyecto ofrece servicios en áreas como atención médica, laboratorio clínico y apoyo farmacéutico, además de otras actividades orientadas al bienestar comunitario."
                        />

                        <FaqItem
                            pregunta="¿Quiénes pueden beneficiarse de estos servicios?"
                            respuesta="Principalmente personas y familias de escasos recursos económicos que viven en comunidades del sur de Francisco Morazán y zonas aledañas."
                        />

                        <FaqItem
                            pregunta="¿Cómo puedo ayudar al proyecto?"
                            respuesta="Puedes ayudar por medio de donaciones, voluntariado, apoyo en actividades o compartiendo la labor del proyecto con otras personas."
                        />

                        <FaqItem
                            pregunta="¿Puedo formar parte del voluntariado?"
                            respuesta="Sí. En la página de Cómo ayudar puedes encontrar un formulario para dejar tus datos y expresar tu interés en colaborar como voluntario o voluntaria."
                        />

                        <FaqItem
                            pregunta="¿Cómo puedo comunicarme con el proyecto?"
                            respuesta="Puedes comunicarte por medio de la página de contacto, donde encontrarás información general y un formulario para enviar tus consultas."
                        />

                        <FaqItem
                            pregunta="¿Las donaciones pueden ser solo económicas?"
                            respuesta="No necesariamente. También puedes apoyar con medicamentos, insumos o manifestar tu interés en colaborar de otras formas según las necesidades del proyecto."
                        />

                        <FaqItem
                            abierta
                            pregunta="¿Dónde está ubicado el proyecto?"
                            respuesta="El proyecto está ubicado en Reitoca, Francisco Morazán, Honduras, y atiende a comunidades cercanas de la zona."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
