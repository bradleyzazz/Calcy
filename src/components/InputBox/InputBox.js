import "./InputBox.css";

function InputBox({ currNum }) {
    return (
        <div id="input" className="calculator-input">
            <div className="result">{currNum}</div>
        </div>
    );
}

export default InputBox;