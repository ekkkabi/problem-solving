idx = 1
while (True):
    n = int(input())

    if (n == 0):
        break

    villages = set(input().strip() for _ in range(n))
    print(f'Week {idx} {len(villages)}')

    idx += 1