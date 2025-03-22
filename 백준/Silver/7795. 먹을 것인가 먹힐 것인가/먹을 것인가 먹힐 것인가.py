import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n, m = map(int, input().strip().split(' '))
    arrA = list(map(int, input().strip().split()))
    arrB = list(map(int, input().strip().split()))
    arrB.sort()
    cnt = 0
    for num in arrA:
        low, high = 0, m-1
        while (low <= high):
            mid = (low + high) // 2
            if (num <= arrB[mid]):
                high = mid - 1
            else:
                low = mid + 1
        cnt += low

    print(cnt)
