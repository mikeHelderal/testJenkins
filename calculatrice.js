const calculer = (n1, op, n2) => {

    switch (op) {
        case "+":
            if(typeof n1 !== "number" || typeof n2 !== "number") return null
            return n1 + n2;            
            break;
        case "-":
            if(typeof n1 !== "number" || typeof n2 !== "number") return null
            return n1 - n2;            
            break;
        case "*":
            if(typeof n1 !== "number" || typeof n2 !== "number") return null
            return n1 * n2;            
            break;
        case "/":
            if(typeof n1 !== "number" || typeof n2 !== "number") return null
            if(n2 === 0) return null
            let result = n1 / n2
            
            return Math.floor(result);            
            break;    
        default:
            return null;
            break;
    }




   return null
    

}

module.exports = calculer;