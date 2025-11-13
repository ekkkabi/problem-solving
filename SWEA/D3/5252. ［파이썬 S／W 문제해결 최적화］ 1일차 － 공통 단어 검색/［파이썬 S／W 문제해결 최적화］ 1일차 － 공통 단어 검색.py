T = int(input())
for test_case in range(1, T + 1):
    n, m = map(int, input().strip().split())
    a = set(input().strip() for _ in range(n))
    b = set(input().strip() for _ in range(m))

    common = a.intersection(b)

    print(f'#{test_case} {len(common)}')
