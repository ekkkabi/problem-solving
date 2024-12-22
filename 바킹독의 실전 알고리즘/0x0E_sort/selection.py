arr = [3, 2, 7, 116, 62, 235, 1, 23, 55, 77]
n = len(arr)

for i in range(n-1, 0, -1):
    mxIdx = 0
    # 범위에서 최대값 찾기
    for j in range(1, i+1):
        if arr[mxIdx] < arr[j]:
            mxIdx = j
    # 최대값과 마지막 원소 교환
    arr[mxIdx], arr[i] = arr[i], arr[mxIdx]

print(arr)
