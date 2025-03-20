import sys
input = sys.stdin.readline

n = int(input())
arr = [input().strip().split() for _ in range(n)]
arr = [(name, int(day), int(month), int(year))
       for name, day, month, year in arr]

sortA = sorted(arr, key=lambda x: (x[3], x[2], x[1]))
print(sortA[n-1][0])
print(sortA[0][0])
