T = int(input())
for test_case in range(1, T + 1):
    n = list(input().strip())[-1]
    if (int(n) % 2 != 0):
        answer = 'Odd'
    else:
        answer = 'Even'

    print(f'#{test_case}', answer)
