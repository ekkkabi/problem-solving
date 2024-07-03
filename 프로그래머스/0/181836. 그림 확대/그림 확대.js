function solution(picture, k) {
    let answer = [];
    for(let i = 0; i<picture.length; i++){
        let tmp = '';
        for(let j = 0; j<picture[i].length; j++){
            let str = picture[i][j].repeat(k);
            tmp += str;
        }
        for(let m = 0; m<k; m++){
            answer.push(tmp);
        }
    }
    return answer;
}
console.log(solution(["x.x", ".x.", "x.x"], 3))