import sys
input = sys.stdin.readline

n, k = map(int, input().strip().split())
al, bl = [], []
for _ in range(n):
    ai, bi = map(int, input().strip().split())
    al.append(ai)
    bl.append(bi)


def isPossible(x):
    cnt = 0
    for i in range(n):
        if al[i] + x >= bl[i]:
            cnt += 1
    if (cnt >= k):
        return True
    return False


low, high = 0, max(bl) - min(al)
while (low < high):
    mid = (low + high) // 2
    if (isPossible(mid)):
        high = mid
    else:
        low = mid + 1
print(low)
