function fun1(n) {
    var tickCounter = 0;
    var tackCounter = 0;
    if (n <= 0) {
        throw 'Bad  param';
    }

    for (var i = 1; i <= n; i++) {

        if (i < 10 && i % 3 == 0) {
            tickCounter++;
        } else if (i > 10 && i % 5 == 0) {
            tackCounter++;
        }

    }

    return {
        tick: tickCounter,
        tack: tackCounter
    };
}

console.assert(fun1(3).tick === 1);
console.assert(fun1(3).tack === 0);
console.assert(fun1(15).tack === 1);
console.assert(fun1(15).tick === 3);
try {
fun1(-9);
}
catch (error){
 console.assert('Bad  param' === error);   
}