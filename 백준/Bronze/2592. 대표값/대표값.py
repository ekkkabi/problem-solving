from collections import Counter
import sys
input = sys.stdin.readline

arr = [int(input()) for _ in range(10)]
val = Counter(arr).most_common()
print(sum(arr)//10)
print(val[0][0])
