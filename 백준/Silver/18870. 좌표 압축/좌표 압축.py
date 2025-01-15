import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().strip().split(' ')))

orgin = arr.copy()
new = sorted(list(set(arr)))


def binary(arr, target):
    st = 0
    en = len(arr)
    while (st < en):
        mid = (st + en) // 2
        if (arr[mid] < target):
            st = mid + 1
        else:
            en = mid
    return en


for num in orgin:
    print(binary(new, num), end=' ')
