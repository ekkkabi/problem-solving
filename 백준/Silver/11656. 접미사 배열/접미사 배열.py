import sys
input = sys.stdin.readline

s = input().strip()
lst = [s[i:] for i in range(len(s))]
lst.sort()
print('\n'.join(lst))
