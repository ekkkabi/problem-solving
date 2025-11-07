T = int(input())
for test_case in range(1, T + 1):
    coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10]

    n = int(input())
    answer = []
    for c in coins:
        answer.append(int(n/c))
        n = n - int(n / c) * c
    print(f'#{test_case}')
    print(*answer)
