export default function Card({ imgSrc, title, paragraph, widthShadow, footer }) {
    let classes = "card "
    if(widthShadow === true) classes += "cardWithShadow"
    return <div className={classes} >
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
        <p>{paragraph}</p>

        {footer}
    </div>
}