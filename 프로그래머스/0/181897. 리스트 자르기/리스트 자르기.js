function solution(n, slicer, num_list) {
    let answer = num_list;
    let a = slicer[0];
    let b = slicer[1];
    let c = slicer[2];
    switch(n){
        case 1:
            answer = answer.slice(0, b+1);
            break;
        case 2:
            answer = answer.slice(a);
            break;
        case 3:
            answer = answer.slice(a, b+1);
            break;
        case 4:
            answer = answer.slice(a, b+1).filter((_, idx) => idx % c === 0);
            break;
        }
    return answer;
}