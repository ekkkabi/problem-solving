import sys
input = sys.stdin.readline

x = int(input())

sticks = [64]

# 1. 가지고 있는 막대 길이 모두 합.
# 합이 x 보다 클 경우 다음 단계 반복
while (sum(sticks) > x):

    # 2. 가지고 있는 최소 막대를 절반으로 나눔
    min_len = min(sticks)
    sticks.remove(min_len)
    half = min_len // 2

    # 3.
    if (sum(sticks) + half < x):
        sticks.extend([half, half])
    else:
        sticks.extend([half])

print(len(sticks))
