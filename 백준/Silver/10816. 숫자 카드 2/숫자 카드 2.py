import sys
input = sys.stdin.readline

n = int(input())
arr1 = list(map(int, input().strip().split(' ')))
arr1.sort()

m = int(input())
arr2 = list(map(int, input().strip().split(' ')))


def lower_idx(target, len):
    st = 0
    en = len
    while (st < en):
        mid = (st + en) // 2
        if (arr1[mid] >= target):
            en = mid
        else:
            st = mid + 1
    return st


def upper_idx(target, len):
    st = 0
    en = len
    while (st < en):
        mid = (st + en) // 2
        if (arr1[mid] > target):
            en = mid
        else:
            st = mid + 1
    return st


for target in arr2:
    result = upper_idx(target, n) - lower_idx(target, n)
    print(result, end=' ')
