import sys
input = sys.stdin.readline

n = int(input())
lst = [int(input()) for _ in range(n)]
lst.sort(reverse=True)
print('\n'.join(map(str, lst)))
