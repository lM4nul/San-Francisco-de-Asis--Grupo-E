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
                <div className="circulo-icono mb-4">
                    {icono}
                </div>
                <h3>{titulo}</h3>
                <p className="parrafo-suave mb-4">{descripcion}</p>
                {renderEnlace()}
            </CardBody>
        </Card>
    );
};

export default CardIcono;
