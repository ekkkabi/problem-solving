lst = []
while (True):
    s = (input().strip())
    if (s == "0"):
        break
    lst.append(s)

answer = []
for i in range(len(lst)):
    front = 0
    back = len(lst[i]) - 1
    isPalindrome = True
    while front < back:
        if (lst[i][front] != lst[i][back]):
            isPalindrome = False
            break
        front += 1
        back -= 1
    if isPalindrome:
        answer.append("yes")
    else:
        answer.append("no")


print('\n'.join(answer))
