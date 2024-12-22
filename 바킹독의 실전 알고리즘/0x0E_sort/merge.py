def merge(arr, tmp, st, en):
    mid = (st+en)//2
    lIdx = st
    rIdx = mid

    for i in range(st, en):
        if (rIdx == en):
            tmp[i] = arr[lIdx]
            lIdx += 1
        elif (lIdx == mid):
            tmp[i] = arr[rIdx]
            rIdx += 1
        elif (arr[lIdx] <= arr[rIdx]):
            tmp[i] = arr[lIdx]
            lIdx += 1
        else:
            tmp[i] = arr[rIdx]
            rIdx += 1

    for i in range(st, en):
        arr[i] = tmp[i]


def merge_sort(arr, tmp, st, en):
    if (st + 1 == en):
        return

    mid = (st+en)//2
    merge_sort(arr, tmp, st, mid)
    merge_sort(arr, tmp, mid, en)
    merge(arr, tmp, st, en)


if __name__ == "__main__":
    arr = [9, 3, 7, 5, 6, 4, 8, 2, 1, 0]
    tmp = [0] * len(arr)

    merge_sort(arr, tmp, 0, len(arr))
    print(" ".join(map(str, arr)))
