import CardHeaderImg from "./CardHeaderImg"

const CardHeader = ({children}) =>{
    return(
        <div className="card-header">
            {children}
        </div>
    )
}

const CardHeaderWithImage = ({imgUrl, altText, children}) =>{
    return(
        <div className="card-header">
            <CardHeaderImg imgUrl={imgUrl} altText={altText} />
            {children}
        </div>
    )
}

export default CardHeader;
export { CardHeaderWithImage };