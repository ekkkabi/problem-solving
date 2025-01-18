import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))

dic = {}
for _ in range(n):
    site, pwd = input().strip().split(' ')
    dic[site] = pwd

for _ in range(m):
    name = input().strip()
    print(dic[name])
