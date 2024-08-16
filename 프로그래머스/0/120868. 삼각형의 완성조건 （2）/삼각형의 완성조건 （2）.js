function solution(sides) {
    var count = 0;
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    let sum = sides[0] + sides[1];
    let diff = Math.abs(sides[0] - sides[1]);
    
    // 가장 긴 변이 max 인 경우
    for(let i = diff; i<max; i++){
        count += 1;
    }
    
    // 나머지 한 변이 가장 긴 변인 경우
    for(let i = max + 1; i < sum; i++){
        count += 1;
    }
    
    return count;
}