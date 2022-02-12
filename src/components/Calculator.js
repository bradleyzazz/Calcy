import { useState, useEffect } from 'react';
import KeyPad from "./KeyPad.js";
import "./Calculator.css";
// import { add, divide, multiply, subtract } from '../../server/controller.js';

function Calculator() {
    const [prevNum, setPrevNum] = useState(null);
    const [currNum, setCurrNum] = useState("0");
    const [operator, setOperator] = useState(null);

    // useEffect(() => { }, [operator, currNum, prevNum]);

    const Operators = {
        "/": 'divide',
        "*": 'multiply',
        "+": 'add',
        "-": 'subtract',
        "=": 'equals'
    }

    async function performOperation() { 
        const action = Operators[operator];
        console.log(action)
        const response = await fetch(`/${action}/${prevNum}/${currNum}`);
        const data = await response.json()
        console.log(data)
        setOperator(null);
        setCurrNum(data);
        setPrevNum(null);
    }

    const handleNum = (number) => {
        setCurrNum(currNum === "0" ? String(number) : currNum + number);
    };

    const insertDecimal = () => {
        setCurrNum(currNum + ".");
    };

    const percentage = () => {
        setCurrNum(parseFloat(currNum) / 100);
        if (prevNum && currNum === "") {
            setPrevNum(parseFloat(prevNum) / 100);
        }
    };

    const changeSign = () => {
        setCurrNum(parseFloat(currNum) * -1);
    };

    const clearData = () => {
        setCurrNum("0");
        setPrevNum(0);
        setOperator(null);
    };

    const handleInput = (value) => {
        if (Number.isInteger(value)) {
            handleNum(parseInt(value, 10));
        } else if (value in Operators) {
            if (operator === null) {
                setOperator(value);
                setPrevNum(currNum);
                setCurrNum("");
            }
            if (operator) {
                setOperator(value);
            }
            if (prevNum && operator && currNum) {
                performOperation();
            }
        } else if (value === "c") {
            clearData();
        } else if (value === "\xB1") {
            changeSign();
        } else if (value === ".") {
            insertDecimal();
        } else if (value === "%") {
            percentage();
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-input">
                <div className="result">{currNum} </div>
            </div>
            < KeyPad handleClick={handleInput}/>
        </div>
    );
}

export default Calculator;