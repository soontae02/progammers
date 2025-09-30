//각도구하기
function solution(angle) {
    if ( angle < 90 ) {
        return 1;
    } else if ( angle === 90 ) {
        return 2;
    } else if ( angle > 90 && angle < 180 ) {
        return 3;
    } else if ( angle === 180 ) {
        return 4;
    }
}

//뒤집힌 문자열
function solution(my_string) {
    return my_string.split('').reverse().join('');
}

//문자열 출력하기
let str = input();
console.log(str);
