export default function Button({ children, styling, type }) {
    let classes = "btn "
    if(styling === 'primary') classes += "btnPrimary"
    return <button type={type} className={classes}> {children} </button>
}