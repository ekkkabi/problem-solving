T = int(input())

for test_case in range(1, T+1):
    n, m, l = map(int, input().strip().split(' '))
    arr = list(map(int, input().strip().split()))
    for _ in range(m):
        idx, num = map(int, input().strip().split(' '))
        arr = arr[:idx] + [num] + arr[idx:]

    print(f'#{test_case} {arr[l]}')