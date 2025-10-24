T = int(input())

for test_case in range(1, T + 1):
    n, m = map(int, input().strip().split(' '))
    inputs = list(map(int, input().strip().split(' ')))

    left, right = 0, m-1
    min_, max_ = float("inf"),  float("-inf")

    while (right < n):
        total = sum(inputs[left:right+1])
        if (total < min_):
            min_ = total
        if (total > max_):
            max_ = total
        left += 1
        right += 1

    print(f'#{test_case} {max_-min_}')
