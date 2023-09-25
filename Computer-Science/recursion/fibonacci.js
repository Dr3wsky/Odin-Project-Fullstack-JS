function fibonacciRecurs(n) {
  return n <= 1 ? n : fibonacciRecurs(n - 1) + fibonacciRecurs(n - 2);
}

function fibonacciBottomUp(n) {
    let a=1; 
    let b=1;
    for (let i =3; i<=n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
    
}