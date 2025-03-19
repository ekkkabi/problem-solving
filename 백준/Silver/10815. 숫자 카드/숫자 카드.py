import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().strip().split(' ')))
m = int(input())
b = list(map(int, input().strip().split(' ')))
a.sort()


def search(num):
    low, high = 0, n-1
    while (low <= high):
        mid = (low + high) // 2
        if (num > a[mid]):
            low = mid + 1
        elif (num < a[mid]):
            high = mid - 1
        else:
            return 1
    return 0


answer = []
for num in b:
    answer.append(search(num))
print(*answer)
