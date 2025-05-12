import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    last = str(n)[-2:]
    if ((n+1) % (int(last)) == 0):
        print("Good")
    else:
        print("Bye")
