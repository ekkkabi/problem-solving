import sys
input = sys.stdin.readline

a, b = map(int, input().strip().split(' '))
arrA = set(map(int, input().strip().split()))
arrB = set(map(int, input().strip().split()))

arr1 = list(arrA - arrB)
arr2 = list(arrB - arrA)
print(len(arr1) + len(arr2))
