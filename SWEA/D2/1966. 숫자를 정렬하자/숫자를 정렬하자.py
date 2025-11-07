T = int(input())

for test_case in range(1, T+1):
    n = int(input())
    a = list(map(int, input().strip().split()))
    a.sort()

    print(f'#{test_case}', *a)
