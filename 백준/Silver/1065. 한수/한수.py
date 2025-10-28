n = int(input())
answer = 0

def IS(n):
    # 두자리 이상 들어옴
    lst = list(map(int, str(n)))
    left, right = 0, 1
    while (right < len(lst)-1):
        if not ((lst[right] - lst[left])
                == (lst[right+1] - lst[right])):
            return False
        right += 1
        left += 1
    return True


for num in range(1, n+1):
    # 한수 확인
    if (num < 100 or IS(num)):
        answer += 1
print(answer)
