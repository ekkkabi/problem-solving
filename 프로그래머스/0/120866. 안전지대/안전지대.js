function solution(board) {
    let len = board.length;
    
    // 지뢰 장소 찾기
    let danger = [];
    for(let i = 0; i<len; i++){
        for(let j = 0; j<len; j++){
            if(board[i][j] === 1)
                danger.push([i,j])
        }
    }
    
    // 위험구역 표시
    const dx = [1, 0, -1, 0, 1, 1, -1, -1];
    const dy = [0, 1, 0, -1, 1, -1, -1, 1];
    let spot = board.map(row => row.slice());
    for(let k = 0; k<danger.length; k++){
        let [curX, curY] = danger[k];
        
        for(let d = 0; d<8; d++){
            let nx = curX + dx[d];
            let ny = curY + dy[d];

            if (nx < 0 || nx >= len || ny < 0 || ny >= len) continue;

            spot[nx][ny] = 1;     
        }
           
    }
    
    return spot.flat().filter((val) => val === 0).length;
}

