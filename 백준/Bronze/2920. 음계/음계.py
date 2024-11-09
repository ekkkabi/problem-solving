asc = [1, 2, 3, 4, 5, 6, 7, 8]
dsc = [8, 7, 6, 5, 4, 3, 2, 1]
nums = list(map(int, input().strip().split()))

if nums == asc:
    print("ascending")
elif nums == dsc:
    print("descending")
else:
    print("mixed")
