import sys
input = sys.stdin.readline

n = int(input())
xs, ys = [], []
for _ in range(n):
    x, y = map(int, input().strip().split())
    xs.append(x)
    ys.append(y)

minx, maxx = min(xs), max(xs)
miny, maxy = min(ys), max(ys)

print(abs(maxx-minx) * abs(maxy-miny))
