T = int(input())
for test_case in range(1, T + 1):
    lst = list(map(int, input().strip().split()))
    answer = 0
    for num in lst:
        if (num < 40):
            answer += 40
        else:
            answer += num

    print(f'#{test_case} {int(answer/len(lst))}')
