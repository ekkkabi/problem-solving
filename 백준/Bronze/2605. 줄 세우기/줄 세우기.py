import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().strip().split()))

answer = [1]

for i in range(1, n):
    answer = answer[:arr[i]] + [i+1] + answer[arr[i]:]
answer.reverse()

print(*answer)
