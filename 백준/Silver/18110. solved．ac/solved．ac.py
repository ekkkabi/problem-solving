import sys
input = sys.stdin.readline

def rounds(ele):
    if (ele - int(ele) >= 0.5):
        return int(ele) + 1
    else:
        return int(ele)

n = int(input())
if n != 0:
    remove = rounds(n * 0.15)
    arr = [int(input()) for _ in range(n)]
    arr.sort()
    arr = arr[remove: n-remove]
    answer = rounds(sum(arr) / len(arr))
    print(answer)
else:
    print(0)
