import sys
from itertools import permutations
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))

nums = [n for n in range(1, n+1)]
arr = list(permutations(nums, m))

arr_lst = [list(item) for item in arr]
sorted(arr_lst)

for val in arr_lst:
    print(*val)
