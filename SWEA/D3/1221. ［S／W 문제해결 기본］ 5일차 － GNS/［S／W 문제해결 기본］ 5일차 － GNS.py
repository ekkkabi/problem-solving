T = int(input())
for test_case in range(1, T + 1):
    tk, n = (input().strip().split(' '))
    lst = (input().strip().split(' '))

    dic1 = {
        "ZRO": 0, "ONE": 1, "TWO": 2, "THR": 3, "FOR": 4, "FIV": 5, "SIX": 6, "SVN": 7, "EGT": 8, "NIN": 9
    }
    tmp = []
    for ch in lst:
        tmp.append(dic1[ch])
    tmp.sort()

    dic2 = {
        0: "ZRO", 1: "ONE", 2: "TWO", 3: "THR", 4: "FOR", 5: "FIV", 6: "SIX", 7: "SVN", 8: "EGT", 9: "NIN"
    }

    answer = []
    for num in tmp:
        answer.append(dic2[num])

    print(f'#{test_case}', *answer)
