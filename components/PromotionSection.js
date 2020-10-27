import Button from "../components/Reusable/Button"

const PromotionSection = ({ imgSrc, title, paragraph, list }) => (
    <section className="promotionSection twoColGrid" >
        <div className="flexRowCenterCenter twoColGrid-leftcol" >
            <img src={imgSrc} alt="" />
        </div>
        <div className=".flexColumnStartCenter twoColGrid-rightcol" >
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <ul> 
                {
                    list.map(item => <li key={item.key} > {item.paragraph} </li>)
                }
            </ul>

            <Button styling="primary" > Start Trading </Button>
        </div>
    </section>
)

export default PromotionSection