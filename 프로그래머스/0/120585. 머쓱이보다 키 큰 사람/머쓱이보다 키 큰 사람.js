function solution(array, height) {
    let answer = 0;
    array.map((idx) => {
        if(idx > height)
            answer += 1;
    })
    return answer;
}