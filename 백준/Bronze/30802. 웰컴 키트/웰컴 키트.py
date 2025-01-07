N = int(input())
arr = list(map(int, input().strip().split(' ')))
T, P = map(int, input().strip().split(' '))

# 티셔츠 묶음 구하기
shirt = 0
for num in arr:
    shirt += num // T

    q = num % T
    if (q != 0):
        shirt += 1
print(shirt)

# 펜 묶음/낱개 개수 구하기
total = sum(arr)
pen = [(total // P), (total % P)]
print(' '.join(map(str, pen)))
