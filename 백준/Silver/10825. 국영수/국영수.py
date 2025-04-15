import sys
input = sys.stdin.readline

n = int(input())
lst = []
for _ in range(n):
    name, kor, eng, math = input().strip().split()
    lst.append((name, int(kor), int(eng), int(math)))

lst.sort(key=lambda x: (-x[1], x[2], -x[3], x[0]))

for e in range(n):
    print(lst[e][0])
