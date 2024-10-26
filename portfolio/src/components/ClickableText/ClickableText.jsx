import "./ClickableText.scss"

function ClickableText(props) {
    return <a className="clickable-text" href="" active={props.active}>{props.text}</a>
    
}

export default ClickableText; 