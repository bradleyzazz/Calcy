import "./KeyPad.css";
import Button from "./Button.js";


function KeyPad(props) {
    return (
        <div className="calculator-keypad">
            <div className="keys-function">
                <Button keyValue={"c"} onClick={props.handleClick} />
                <Button keyValue={"\xB1"} onClick={props.handleClick} />
                <Button keyValue={"%"} onClick={props.handleClick} />
            </div>
            <div className="keys-operators">
                <Button keyValue={"/"} onClick={props.handleClick} />
                <Button keyValue={"*"} onClick={props.handleClick} />
                <Button keyValue={"-"} onClick={props.handleClick} />
                <Button keyValue={"+"} onClick={props.handleClick} />
                <Button keyValue={"="} onClick={props.handleClick} />
            </div>
            <div className="keys-numbers">
                <Button keyValue={9} onClick={props.handleClick} />
                <Button keyValue={8} onClick={props.handleClick} />
                <Button keyValue={7} onClick={props.handleClick} />
                <Button keyValue={6} onClick={props.handleClick} />
                <Button keyValue={5} onClick={props.handleClick} />
                <Button keyValue={4} onClick={props.handleClick} />
                <Button keyValue={3} onClick={props.handleClick} />
                <Button keyValue={2} onClick={props.handleClick} />
                <Button keyValue={1} onClick={props.handleClick} />
                <Button keyValue={"."} onClick={props.handleClick} />
                <Button className="key-zero" keyValue={0} onClick={props.handleClick} />
            </div>
        </div >
    )
} 

export default KeyPad;