import sys
input = sys.stdin.readline

p1 = list(input().strip().split())
p2 = list(input().strip().split())
p3 = list(input().strip().split())

first = [(int(p1[1]) % 100), (int(p2[1]) % 100), (int(p3[1]) % 100)]
first.sort()
print(''.join(map(str, first)))


nameC = sorted([p1, p2, p3], key=lambda x: int(x[0]), reverse=True)
print(nameC[0][2][0] + nameC[1][2][0] + nameC[2][2][0])
