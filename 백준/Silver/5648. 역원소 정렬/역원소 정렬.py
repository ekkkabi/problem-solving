import sys

all = sys.stdin.read().split()
n = int(all[0])
lst = all[1:n+1]

nums = []
for ele in lst:
    nums.append(int(ele[::-1]))
nums.sort()
print('\n'.join(map(str, nums)))
