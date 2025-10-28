isIn = set()
answer = []
for num in range(1, 10001):
    total = sum(map(int, str(num))) + num
    isIn.add(total)

for num in range(1, 10001):
    if (num not in isIn):
        print(num)