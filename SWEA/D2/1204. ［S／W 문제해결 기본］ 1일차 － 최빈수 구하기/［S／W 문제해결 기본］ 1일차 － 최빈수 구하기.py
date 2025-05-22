t = int(input())
for _ in range(t):
    case = int(input())
    nums = list(map(int, input().strip().split()))

    dic = dict()
    for num in nums:
        if (num in dic):
            dic[num] += 1
        else:
            dic[num] = 0

    maxValue = max(dic.values())
    maxKeys = []
    for key, value in dic.items():
        if (value == maxValue):
            maxKeys.append(key)
    answer = max(maxKeys)

    print(f'#{case} {answer}')