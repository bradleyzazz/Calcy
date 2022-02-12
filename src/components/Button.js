import "./Button.css";

function Button(props) {
    return (
        <button className={`${props.className}`} onClick={() => props.onClick(props.keyValue)}>
            {props.keyValue}
        </button>
    );
}

export default Button;