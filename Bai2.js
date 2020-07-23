function sum(n) {
    return n == 0 ? 0 : n + sum(n - 1);
}
console.log(sum(0));
console.log(sum(1));
console.log(sum(3));
console.log(sum(10));