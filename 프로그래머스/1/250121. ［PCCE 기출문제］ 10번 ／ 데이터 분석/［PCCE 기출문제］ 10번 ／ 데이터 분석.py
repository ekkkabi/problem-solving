def solution(data, ext, val_ext, sort_by):
    answer = []
    for i in range(len(data)):
        if(ext == 'code' and data[i][0] < val_ext):
            answer.append(data[i])
        elif(ext == 'date' and data[i][1] < val_ext):
            answer.append(data[i])
        elif(ext == 'maximum' and data[i][2] < val_ext):
            answer.append(data[i])
        elif(ext == 'remain' and data[i][3] < val_ext):
            answer.append(data[i])
    
    if(sort_by == 'code'):
        answer = sorted(answer, key = lambda x : x[0])
    elif(sort_by == 'date'):
        answer = sorted(answer, key = lambda x : x[1])
    elif(sort_by == 'maximum'):
        answer = sorted(answer, key = lambda x : x[2])
    else:
        answer = sorted(answer, key = lambda x : x[3])
    return answer