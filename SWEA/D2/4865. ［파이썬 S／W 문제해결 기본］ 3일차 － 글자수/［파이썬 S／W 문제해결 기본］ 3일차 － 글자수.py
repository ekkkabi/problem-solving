T = int(input())

for test_case in range(1, T + 1):
    str1 = list(input().strip())
    str2 = list(input().strip())

    dic = dict()
    for ch in str2:
        if ch in dic:
            dic[ch] += 1
        else:
            dic[ch] = 1

    dic = sorted(dic.items(), key=lambda x: x[1], reverse=True)

    for key, item in dic:
        if (key in str1):
            print(f'#{test_case} {item}')
            break
