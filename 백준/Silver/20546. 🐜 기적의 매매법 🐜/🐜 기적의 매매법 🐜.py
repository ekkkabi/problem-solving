import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().strip().split()))

bnpMoney = int(n)
bnpResult = 0
for m in lst:
    if (m <= bnpMoney):
        cnt = bnpMoney // m
        bnpResult += cnt
        bnpMoney -= cnt * m
jun = bnpMoney + bnpResult * lst[-1]


timingMoney = int(n)
timingResult = 0
for i in range(len(lst)-3):
    arr = lst[i:i+3]
    next = lst[i+3]

    if (arr[0] > arr[1] and arr[1] > arr[2]):
        cnt = timingMoney // next
        timingResult += cnt
        timingMoney -= next * cnt
    elif (arr[0] < arr[1] and arr[1] < arr[2]):
        timingMoney += timingResult * next
        timingResult = 0
seong = timingMoney + timingResult * lst[-1]


if (jun > seong):
    print("BNP")
elif (jun == seong):
    print("SAMESAME")
else:
    print("TIMING")
