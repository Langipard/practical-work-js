function fibonacci(numb) {
    return numb <= 1 ? numb : fibonacci(numb - 1) + fibonacci(numb - 2);
}

console.log(fibonacci(7))