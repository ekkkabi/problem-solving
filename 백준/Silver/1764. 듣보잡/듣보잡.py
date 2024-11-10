n, m = (map(int, input().strip().split()))

nNums = []
for i in range(n):
    strs = input().strip()
    nNums.append(strs)

mNums = []
for i in range(m):
    strs = input().strip()
    mNums.append(strs)

answer = list(set(nNums) & set(mNums))
answer.sort()

print(len(answer))
print('\n'.join(answer))
