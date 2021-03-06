import { useState } from 'react';
import KeyPad from "../KeyPad/KeyPad.js";
import InputBox from "../InputBox/InputBox.js";
import FiveMostRecent from "../FiveMostRecent/FiveMostRecent.js";
import "./Calculator.css";

function Calculator() {
    const [prevNum, setPrevNum] = useState(null);
    const [currNum, setCurrNum] = useState("0");
    const [operator, setOperator] = useState(null);
    const [mostRecent, setMostRecent] = useState([]);

    const Operators = {
        "/": 'divide',
        "*": 'multiply',
        "+": 'add',
        "-": 'subtract',
        "=": 'equals'
    };

    async function performOperation() {
        const action = Operators[operator];

        try {
            const response = await fetch(`/${action}/${prevNum}/${currNum}`);
            const data = await response.json();
            setCurrNum(data);
            addToMostRecent(data)
        } catch (error) {
            console.log("Math calculation was unsuccesful. Here is the error:", error);
        } finally {
            setOperator(null);
            setPrevNum(null);
        }
    };

    const addToMostRecent = (data) => {
        setMostRecent(prevList => { 
            if (prevList.length > 4) prevList = prevList.slice(0, prevList.length - 1);
            return [`${prevNum} ${operator} ${currNum} = ${data}`, ...prevList];
          })
    }

    const handleNum = (number) => {
        setCurrNum(currNum === "0" ? number : currNum + number);
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
        <div>
            <div className="calculator">
                <InputBox currNum={currNum} />
                <KeyPad handleClick={handleInput} />
            </div>
            <div>
                <FiveMostRecent mostRecent={mostRecent} />
            </div>
        </div>
    );
}

export default Calculator;