import sys
input = sys.stdin.readline

n, l, h = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))

answer = 0
arr.sort()
lst = arr[l:n-h]

for num in lst:
    answer += num
print(answer / len(lst))
