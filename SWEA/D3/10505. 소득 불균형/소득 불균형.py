T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    lst = list(map(int, input().strip().split()))
    answer = 0
    for num in lst:
        if num <= (sum(lst)/n):
            answer += 1

    print(f'#{test_case} {answer}')
