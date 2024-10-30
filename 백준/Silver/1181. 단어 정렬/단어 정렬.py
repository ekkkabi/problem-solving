n = int(input().strip())
strs = [input().strip() for _ in range(n)]
strs = list(set(strs))
strs.sort()
strs.sort(key=len)

for i in strs:
    print(i)
