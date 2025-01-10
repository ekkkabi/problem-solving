import math

a, b, v = map(int, input().strip().split(' '))
day = math.ceil((v - a) / (a - b)) + 1
print(day)
