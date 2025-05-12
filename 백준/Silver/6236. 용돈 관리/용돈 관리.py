import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
lst = [int(input()) for _ in range(n)]


def makeK(k):
    cnt = 1
    now = k
    for num in lst:
        if (now < num):
            cnt += 1
            now = k
        now -= num
    return cnt


low, high = max(lst), sum(lst)
answer = high
while (low <= high):
    mid = ((low + high)//2)
    withdraw = makeK(mid)
    if (withdraw <= m):
        answer = mid
        high = mid - 1
    else:
        low = mid + 1
print(answer)
