T = int(input())

for test_case in range(1, T+1):
    lh, lm, rh, rm = map(int, input().strip().split())

    h = ((lh+rh + ((lm+rm)//60)) % 12)
    if (h == 0):
        h = 12

    print(f'#{test_case} {h} {((lm+rm) % 60)}')
