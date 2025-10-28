T = int(input())

for test_case in range(1, T+1):
    n, m = map(int, input().strip().split(' '))
    a = set(map(int, input().strip().split()))
    b = set(map(int, input().strip().split()))
    sets = set(a & b)

    print(f'#{test_case} {len(sets)}')