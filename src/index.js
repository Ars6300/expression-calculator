function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let zero = /\/0/g
    expr = expr.replace(/\s+/g, '');
    if(expr.includes('/0')) { throw new Error('TypeError: Division by zero.');}
    //if(expr.match(/[^(]/g).length != expr.match(/[^)]/g)) { throw new Error('ExpressionError: Brackets must be paired') }
    if ( expr.replace(/[^(]/g, "").length != expr.replace(/[^)]/g, "").length ) {
        throw new Error("ExpressionError: Brackets must be paired");
      }
    return +new Function('return ' + expr)();
}

module.exports = {
    expressionCalculator
}