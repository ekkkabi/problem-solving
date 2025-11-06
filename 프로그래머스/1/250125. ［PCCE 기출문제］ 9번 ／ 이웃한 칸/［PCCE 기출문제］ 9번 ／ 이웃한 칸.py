def solution(board, h, w):
    answer = 0
    
    height, width = len(board), len(board[0])    
    direction = [[-1,0], [1,0], [0,-1], [0,1]]
    for dx, dy in direction:
        nx, ny = h+dx, w+dy
        if(0<=nx<height and 0<=ny<width and board[nx][ny]==board[h][w]):
            answer += 1            
    return answer