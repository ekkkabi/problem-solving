function solution(arr) {
    let tmp = arr.slice();
    let count = 0;
    let isSame = false;
    
    while(!isSame) {
        let answer = [];
        for (let i = 0; i < arr.length; i++) {
            if ((tmp[i] % 2 === 0) && (tmp[i] >= 50)) {
                answer.push(parseInt(tmp[i] / 2));
            } else if ((tmp[i] % 2 !== 0) && (tmp[i] < 50)) {
                answer.push(tmp[i] * 2 + 1);
            } else {
                answer.push(tmp[i]);
            }
        }
        isSame = tmp.every((ele, idx) => ele === answer[idx]);
        if (!isSame) {
            tmp = answer.slice();
            count += 1;
        }
    }   
    return count;
}