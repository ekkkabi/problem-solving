a, b = map(int, input().strip().split(' '))

arr = [0]
for i in range(1, b+1):
    arr.extend([i] * i)

arr = arr[a:b+1]
print(sum(arr))