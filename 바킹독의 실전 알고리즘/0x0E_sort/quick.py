def quick_sort(arr,  st, en):
    if (en <= st+1):
        return
    pivot = arr[st]
    L = st + 1
    R = en - 1

    while (True):
        while (L <= R and arr[L] <= pivot):
            L += 1
        while (L <= R and pivot <= arr[R]):
            R -= 1
        if (L > R):
            break
        arr[L], arr[R] = arr[R], arr[L]

    arr[st], arr[R] = arr[R], arr[st]
    quick_sort(arr, st, R)
    quick_sort(arr, R + 1, en)


if __name__ == "__main__":
    arr = [6, -8, 1, 12, 8, 3, 7, -7]
    quick_sort(arr, 0, len(arr))
    print(arr)
