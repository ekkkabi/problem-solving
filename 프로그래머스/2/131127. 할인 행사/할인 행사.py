def solution(want, number, discount):
    answer = 0
    
    # 1. 원하는 항목이 할인하지 않는 경우
    for item in want:
        if(item not in discount):
            return 0
        
    # 2. 원하는 항목 할인 경우 
    # 2-1. 원하는 목록-개수 매핑
    want_map = {}
    for i in range(len(want)):
        want_map[want[i]] = number[i]
        
    
    
    for cnt in range(len(discount)-10+1):
        new_discount = discount[cnt:cnt+10]
        isSame = True
        for item in want_map:
            nums = want_map[item]
            # 원하는 개수 없을 경우 멈춤
            if(nums != new_discount.count(item)):
                isSame = False
                break
        if(isSame):
            answer += 1            
    
    return answer