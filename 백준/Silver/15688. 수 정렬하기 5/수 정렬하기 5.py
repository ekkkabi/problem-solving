import sys

N = int(sys.stdin.readline())
lst = [int(sys.stdin.readline()) for _ in range(N)]

min_num = min(lst)
max_num = max(lst)

# Counting Sort

# 숫자 등장 횟수 리스트 선언
arr = [0] * (max_num - min_num + 1)

# 숫자 등장 횟수 카운트
for i in lst:
    arr[i-min_num] += 1

# (숫자 * 등장회수) 출력
for idx, count in enumerate(arr):
    if count > 0:
        print((str(idx + min_num) + ' ') * count, end='')
