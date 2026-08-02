import { Link } from 'react-router'
import Card from './Card'
import CardHeaderImg from './CardHeaderImg'
import CardBody from './CardBody'

const PostCard = ({
    imgUrl,
    altText,
    tag,
    fecha,
    titulo,
    descripcion,
    enlace,
    textoEnlace = "Leer más",
}) => {
    return (
        <Card>
            {imgUrl==null ? null : <CardHeaderImg imgUrl={imgUrl} altText={altText} />}
            <CardBody>
                {tag && <p className="text-cyan-500 font-bold">{tag}</p>}
                {fecha && <p className="text-neutral-500 text-sm">{fecha}</p>}
                <h3 className="text-2xl font-bold leading-tight">{titulo}</h3>
                {descripcion && <p className="text-neutral-600 leading-7">{descripcion}</p>}
                {enlace && (
                    <Link to={enlace} className="text-[#e97b1e] font-bold inline-block">
                        {textoEnlace}
                    </Link>
                )}
            </CardBody>
        </Card>
    );
};

export default PostCard;
