//두 수의 합
function solution(num1, num2) {
    var answer = -1;
    return num1 + num2;
}

//두 수의 차
function solution(num1, num2) {
    var answer = -1;
    return num1 - num2;
}

//두 수의 곱
function solution(num1, num2) {
    var answer = -1;
    return num1 * num2;
}

//몫 구하기
function solution(num1, num2) {
    var answer = -1;
    return Math.floor(num1 / num2);
}

//두 수의 나눗셈
function solution(num1, num2) {
    var answer = 0;
    return parseInt((num1 / num2)*1000);
}

console.log(solution(1, 16));

//숫자 비교하기
function solution(num1, num2) {
    if (num1 === num2) {
        return 1;
    } else {
        return -1;
    }
}

console.log(solution(11, 11));

//분수의 덧셈
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}

//배열 두배 만들기
function solution(numbers) {

    let result = [];

    for (i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2);
    }

    return result;
}

console.log(solution([1,2,100,-99,1,2,3]));

//나머지 구하기
function solution(num1, num2) {
    var answer = -1;
    return num1 % num2;
}

console.log(solution(10, 5));

//나이 출력
function solution(age) {
    return 2022-age+1;
}

console.log(solution(23));