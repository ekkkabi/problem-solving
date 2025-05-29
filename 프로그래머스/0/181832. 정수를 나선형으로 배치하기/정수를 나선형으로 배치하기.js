function solution(n) {
    let answer = Array.from({ length: n }, () => Array(n).fill(0));
    
    let dir = [[0,1], [1,0], [0,-1], [-1,0]]
    let [currX, currY] = [0, 0]
    let cnt = 0
    let number = 1
    let dx, dy;
    
    while(number < n*n+1){
        // 현재 위치에 숫자 넣기        
        answer[currX][currY] = number;
        
        // 다음 위치 계산        
        dx = currX + dir[cnt][0];
        dy = currY + dir[cnt][1];
        
        // 범위 안에 이미 값이 채워져 있는 경우
        if( 0 <= dx && dx < n 
          && 0 <= dy && dy < n
          && answer[dx][dy] !== 0){
            cnt = (cnt + 1) % 4
        }
        
        // 범위 넘어가는 경우
        if (dx<0 || dx>=n || dy<0 || dy>=n){
            cnt = (cnt + 1) % 4
        }        
        
        // 현재 위치 및 숫자 업데이트
        dx = currX + dir[cnt][0];
        dy = currY + dir[cnt][1];
        [currX, currY] = [dx, dy];
        number += 1;
        
    }
    

    return answer;
}