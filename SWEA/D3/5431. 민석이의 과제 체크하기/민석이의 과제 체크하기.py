T = int(input())
for test_case in range(1, T + 1):
    n, k = map(int, input().strip().split())
    finish = list(map(int, input().strip().split()))
    answer = []
    for num in range(1, n+1):
        if (num not in finish):
            answer.append(num)

    print(f'#{test_case}', *answer)
