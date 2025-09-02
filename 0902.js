//짝수의 합
function solution(n) {
    let sum = 0;
    for ( i = 0; i <= n; i++ ) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10));
console.log(solution(4));

//배열의 평균값
function solution(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let avg = sum / numbers.length;
    return avg.toFixed(1);
}

let number = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(`평균: ${number}`); 