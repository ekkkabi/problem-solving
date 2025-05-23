import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().strip().split()))

answer = []
for i in range(len(lst)-1, -1, -1):
    answer.insert(lst[i], i+1)

print(' '.join(map(str, answer)))