function solution(number) {
    let result = 0;
    for (i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result += i;
        }
    }
    return result;
}

console.log(solution(10))