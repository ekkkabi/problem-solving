import sys
input = sys.stdin.readline

bulbs = list(input().strip())

lights = bulbs.count('Y')

if (lights == 0):
    print(0)
elif (lights == len(bulbs)):
    print(1)
else:
    answer = 0
    for j in range(len(bulbs)):
        if (bulbs[j] == 'Y'):
            answer += 1
            # j 의 배수 라이트 전환(j+1)
            for k in range(j, len(bulbs), j+1):
                if (bulbs[k] == 'Y'):
                    bulbs[k] = 'N'
                else:
                    bulbs[k] = 'Y'

    if (bulbs.count('Y')):
        print(-1)
    else:
        print(answer)
