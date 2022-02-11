const add = (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const sum = num1 + num2
    
    
    if (typeof sum !== 'number' || isNaN(sum)) {
        res.status(400).send('Bad numbers!!');
    } else {
        res.status(200).send(sum.toString());
    }
}

const subtract = (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const diff = num1 - num2
    
    
    if (typeof diff !== 'number' || isNaN(diff)) {
        res.status(400).send('Bad numbers!!');
    } else {
        res.status(200).send(diff.toString());
    }
}

const multiply = (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const mult = num1 * num2
    
    
    if (typeof mult !== 'number' || isNaN(mult)) {
        res.status(400).send('Bad numbers!!');
    } else {
        res.status(200).send(mult.toString());
    }
}

const divide = (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const div = num1 / num2
    
    
    if (typeof div !== 'number' || isNaN(div)) {
        res.status(400).send('Bad numbers!!');
    } else {
        res.status(200).send(div.toString());
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};