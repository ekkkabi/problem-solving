n = int(input().strip())
a = set(map(int, input().strip().split()))
m = int(input().strip())
arr = list(map(int, input().strip().split()))

for target in arr:
    if target in a:
        print(1)
    else:
        print(0)
