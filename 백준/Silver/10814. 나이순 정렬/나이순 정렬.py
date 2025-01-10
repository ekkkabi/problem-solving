n = int(input())
arr = []

for _ in range(n):
    age, name = (input().strip().split(' '))
    age = int(age)
    arr.append([age, name])

result = sorted(arr, key=lambda x: x[0])
for age, name in result:
    print(age, name)
