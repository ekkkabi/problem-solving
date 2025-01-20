import sys
input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]
arr.sort()


def binary(arr, target):
    st = 0
    en = len(arr) -1
    while (st <= en):
        mid = (st + en) // 2
        if (arr[mid] == target):
            return True
        elif arr[mid] < target:
            st = mid + 1
        else:
            en = mid - 1
    return False


# 두 수의 합 모든 경우의 수
two_sums = []
for i in range(n):
    for j in range(i, n):
        two_sums.append(arr[i] + arr[j])
two_sums.sort()

# 특정 수에서 다른 수 뺀 값이 two_sums 있는지 확인
answer = 0
for i in range(n-1, -1, -1):
    for j in range(n):
        if binary(two_sums, arr[i] - arr[j]):
            answer = max(answer, arr[i])
            break
    if answer == arr[i]:
        break
print(answer)
