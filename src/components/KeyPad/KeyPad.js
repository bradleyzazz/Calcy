import "./KeyPad.css";
import Button from "../Button/Button.js";

function KeyPad({handleClick}) {
    const functions = ['c', '\xB1', '%'];
    const operators = ['/', '*', '-', '+', '='];
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, '.', 0];

    return (
        <div className="calculator-keypad">
            <div className="keys-function">
                {functions.map( func => (
                    <Button keyValue={func} handleClick={handleClick} />
                ))}
            </div>
            <div className="keys-operators">
                {operators.map( op => (
                    <Button keyValue={op} handleClick={handleClick} />
                ))}
            </div>
            <div className="keys-numbers">
                {numbers.map( num => (
                    num === 0 ?  
                        <Button className={'key-zero'} keyValue={num} handleClick={handleClick} /> :
                        <Button keyValue={num} handleClick={handleClick} />
                ))}
            </div>
        </div>
    )
}

export default KeyPad;