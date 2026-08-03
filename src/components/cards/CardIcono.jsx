import { Link } from 'react-router';
import Card from './Card';
import CardBody from './CardBody';

const CardIcono = ({ icono, titulo, descripcion, enlace, textoEnlace }) => {
    const renderEnlace = () => {
        if (!enlace || !textoEnlace) return null;

        const esExterno = enlace.startsWith('#') || enlace.startsWith('http');

        const clases = "font-bold text-orange-500 hover:text-orange-600";

        if (esExterno) {
            return <a href={enlace} className={clases}>{textoEnlace}</a>;
        }
        return <Link to={enlace} className={clases}>{textoEnlace}</Link>;
    };

    return (
        <Card>
            <CardBody>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-orange-500">
                    {icono}
                </div>
                <h3>{titulo}</h3>
                <p className="mb-4 leading-relaxed text-neutral-500">{descripcion}</p>
                {renderEnlace()}
            </CardBody>
        </Card>
    );
};

export default CardIcono;
