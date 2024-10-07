function solution(a, b) {
    // 최대 공약수로 나눠 기약분수 만들기
    let gcd = (a,b) => {
        while(b>0){
            let r = a % b;
            a = b;
            b = r;            
        }
        return a;
    }
    let down = b / gcd(a,b);

    // 분모 소인수분해시 2, 5 외 숫자 존재시 무한소수
    // else 유한소수
    let arr = []
    for(let i = 2; i<= down; i++){
        while(down % i === 0){
            arr.push(i);
            down /= i;
        }
    }
    let filterArr = arr.filter((ele) => ele !== 2 && ele !== 5);

    return filterArr.length === 0 ? 1 : 2;
}