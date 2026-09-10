def solution(arr1, arr2):
    answer = []

    for i in range(len(arr1)):
        lst = []
        for j in range(len(arr2[0])):
            total = 0
            for k in range(len(arr1[0])):
                left = arr1[i][k]
                right = arr2[k][j]
                total += left * right
            lst.append(total)
        answer.append(lst)        
            
    return answer