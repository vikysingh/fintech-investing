export default function SectionTemplate({ children, title, paragraph, footer }) {
    return <section className="sectionTemplate" >
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <div className="flexRowCenterCenter" >
            {children}
        </div>
        {footer}
    </section>
}