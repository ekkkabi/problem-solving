n = int(input())

def factorial(num):
    if num == 0:
        return 1
    return factorial(num - 1) * num


tmp = str(factorial(n))[::-1]
for i in range(len(tmp)):
    if (tmp[i] == '0'):
        continue
    else:
        print(i)
        break
