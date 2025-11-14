T = int(input())

for test_case in range(1, T+1):
    n = int(input())
    lst = ((input().strip().split(' ')))

    if (n % 2 != 0):
        a, b = lst[:n//2+1], lst[n//2+1:]
    else:
        a, b = lst[:n//2], lst[n//2:]
    answer = []
    for i in range(n//2):
        answer.append(a[i])
        answer.append(b[i])
    if (n % 2 != 0):
        answer.append(a[-1])

    print(f'#{test_case}', *answer)
