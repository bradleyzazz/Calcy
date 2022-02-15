import "./Button.css";

function Button({className, handleClick, keyValue}) {
    return (
        <button className={`${className}`} onClick={() => handleClick(keyValue)}>
            {keyValue}
        </button>
    );
}

export default Button;