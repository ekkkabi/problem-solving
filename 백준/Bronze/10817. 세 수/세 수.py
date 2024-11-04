lst = list(map(int, input().strip().split()))
maxNum = max(lst)
(lst.remove(maxNum))
print(max(lst))
