n = int(input())
arr = []

for _ in range(n):
    x, y = map(int, input().strip().split(' '))
    arr.append([x, y])

result = sorted(arr)
for x, y in result:
    print(x, y)
