T = int(input())
for test_case in range(1, T + 1):
    p, q, r, s, w = map(int, input().strip().split())
    a = p*w
    b = q
    if (w > r):
        b += (w-r) * s
    print(f'#{test_case} {min(a, b)}')
