function solution(a, b, n) {
    let answer = 0
    while(n >= a){
        let give = parseInt(n/a) * a
        let get = parseInt(n/a) * b
        n = n - give + get
        answer += get
    }
    return answer;
}