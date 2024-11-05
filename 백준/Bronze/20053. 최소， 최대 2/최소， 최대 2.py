t = int(input().strip())

lst = []
answer = []
for i in range(t):
    n = int(input().strip())
    nums = list(map(int, input().strip().split()))
    maxNum = max(nums)
    minNum = min(nums)
    print(f'{minNum} {maxNum}')