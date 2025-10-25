T = int(input())

for test_case in range(1, T+1):
    n = int(input())
    sets = set(map(int, list(str(n))))

    i = 2
    while (len(sets) < 10):
        nums = set(map(int, list(str(i*n))))
        sets.update(nums)
        i += 1

    print(f'#{test_case} {(i-1)*n}')
