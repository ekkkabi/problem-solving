plates = input().strip()
answer = 0

for i in range(len(plates)):
    if (i == 0):
        answer += 10

    else:
        curr = plates[i]
        pre = plates[i-1]

        if (curr == pre):
            answer += 5
        else:
            answer += 10

print(answer)
