function fun1(n) {
    if (n <= 0) {
        throw 'Bad  param';
    }
    var str1 = 'tick';
    var str2 = 'tack';
    for (var i = 1; i <= n; i++) {

        if (i < 10 && i % 3 == 0) {
            console.log(str1);
        } else if (i > 10 && i % 5 == 0) {
            console.log(str2);
        }

    }
}

// console.assert(fun1(3)==='tick');
// console.assert(fun1(15)==='tack');