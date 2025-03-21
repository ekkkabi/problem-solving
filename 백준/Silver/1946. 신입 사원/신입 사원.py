import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    arr = [list(map(int, input().strip().split()))
           for _ in range(n)]
    arrA = sorted(arr, key=lambda x: (x[0]))
    cnt = 1
    interview = arrA[0][1]
    for i in range(1, n):
        if (interview > arrA[i][1]):
            cnt += 1
            interview = arrA[i][1]

    print(cnt)
