import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
s = input().strip()

io = 'I' + "OI" * n
length = len(io)

cnt = 0
for i in range(m-length+1):
    sl = s[i:i+length]
    if (sl == io):
        cnt += 1
print(cnt)
