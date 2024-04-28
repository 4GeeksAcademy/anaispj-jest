// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};


function fromEuroToDollar (euro) {
    let dollar = euro * oneEuroIs["USD"];
    return dollar; 
};

function fromDollarToYen (dollar) {
    // 1. Pasamos de dollar a euro
    let euros = dollar / oneEuroIs["USD"];
    // 2. Pasamos de euro a yen
    let yen = euros * oneEuroIs["JPY"];
    // 3. Retornamos el ultimo resultado
    return yen;
};

console.log(fromDollarToYen(10));

function fromYenToPound (yen) {
    let euros = yen / oneEuroIs["JPY"];
    let pounds = euros * oneEuroIs["GBP"];
    return pounds 
};

