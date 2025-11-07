T = int(input())

for test_case in range(1, T+1):
    n, m = map(int, input().strip().split(' '))
    a = list(map(int, input().strip().split()))
    b = list(map(int, input().strip().split()))

    answer = float('-infinity')
    length = m-n+1 if n <= m else n-m+1
    for i in range(length):
        if (n <= m):
            total = sum(x*y for x, y in zip(a, b[i:i+n]))
        else:
            total = sum(x*y for x, y in zip(a[i:i+m], b))
        answer = max(answer, total)

    print(f'#{test_case} {answer}')
