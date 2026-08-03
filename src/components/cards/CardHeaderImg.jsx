const CardHeaderImg = ({imgUrl, altText, className = "card-header-img"}) =>{
    return(
        <img 
            className={className}
            src={imgUrl}
            alt={altText}
        />
    )
}

export default CardHeaderImg;