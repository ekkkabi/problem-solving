function solution(keyinput, board) {
    var answer = [0, 0];
    let [x, y] = [parseInt((board[0]-1)/2), parseInt((board[1]-1)/2)];
    keyinput.forEach((item) => {
        switch(item){
            case 'left':
                if(answer[0] > -x) answer[0]--;
                break;
            case 'right':
                if(answer[0] < x) answer[0]++;
                break;
            case 'up':
                if(answer[1] < y) answer[1]++;
                break;
            case 'down':
                if(answer[1] > -y) answer[1]--;
                break;
        }
    })
    return answer;
}