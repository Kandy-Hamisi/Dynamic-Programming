// the positions: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// fib numbers:   1, 1, 2, 3, 5, 8,13, 21

const fib = (n) =>{

    // first two numbers of the sequence are 1
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(3));

// while giving a larger number it becomes slow

// 