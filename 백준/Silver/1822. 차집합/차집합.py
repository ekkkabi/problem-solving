import sys
input = sys.stdin.readline

a, b = map(int, input().strip().split(' '))
arrA = set(map(int, input().strip().split()))
arrB = set(map(int, input().strip().split()))

answer = arrA - arrB
if not answer:
    print(0)
else:
    print(len(answer))
    print(*sorted(answer))
