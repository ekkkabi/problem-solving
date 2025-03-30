import sys
input = sys.stdin.readline

while True:
    a, b, c = map(int, input().strip().split(' '))

    if (a == 0 and b == 0 and c == 0):
        exit()

    maxN = max(a, b, c)
    reN = (a+b+c) - maxN

    if (maxN >= reN):
        print("Invalid")
    elif (a == b and b == c and c == a):
        print("Equilateral")
    elif (a != b and b != c and c != a):
        print("Scalene")
    else:
        print("Isosceles")
