import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
name = []
for _ in range(n):
    i, j = input().strip().split(' ')
    j = int(j)
    name.append([i, j])
name.sort(key=lambda x: x[1])

for _ in range(m):
    level = int(input())
    low, high = 0, n-1
    while (low <= high):
        mid = (low + high) // 2
        if (level > name[mid][1]):
            low = mid + 1
        else:
            high = mid - 1
    print(name[low][0])
