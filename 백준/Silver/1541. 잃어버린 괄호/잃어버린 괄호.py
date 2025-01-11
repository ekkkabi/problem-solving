inputs = input().split('-')
answer = 0

for i in range(len(inputs)):
    arr = inputs[i].split('+')
    arr = list(map(int, arr))
    sums = sum(arr)
    if i == 0:
        answer += sums
    else:
        answer -= sums
print(answer)
