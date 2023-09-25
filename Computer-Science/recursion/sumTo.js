// Iterative
function sumTo(n) { 
    let sum = 0;
for (let i =0; i<=n; i++) {
    sum +=i;
}
return sum
}

function sumToRecurs(n) {
    return (n==1) ? n : (n+sumToRecurs(n-1));
}

alert( sumTo(100) ); // 5050

