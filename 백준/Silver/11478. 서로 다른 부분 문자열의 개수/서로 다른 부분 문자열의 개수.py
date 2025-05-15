import sys
input = sys.stdin.readline

string = list(input().strip())
make = set()
for i in range(len(string)):
    for j in range(i, len(string)):
        make.add(''.join(string[i:j+1]))


print(len(make))
