nums = list(map(int, input().strip().split()))
sum = 0
for i in nums:
    sum += (i ** 2)
print(sum % 10)
