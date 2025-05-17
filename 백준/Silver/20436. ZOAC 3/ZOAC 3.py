import sys
input = sys.stdin.readline

l, r = (input().strip().split())
target = input().strip()

keyboard = {
    'q': (0, 0), 'w': (0, 1), 'e': (0, 2), 'r': (0, 3), 't': (0, 4),
    'y': (0, 5), 'u': (0, 6), 'i': (0, 7), 'o': (0, 8), 'p': (0, 9),
    'a': (1, 0), 's': (1, 1), 'd': (1, 2), 'f': (1, 3), 'g': (1, 4),
    'h': (1, 5), 'j': (1, 6), 'k': (1, 7), 'l': (1, 8),
    'z': (2, 0), 'x': (2, 1), 'c': (2, 2), 'v': (2, 3), 'b': (2, 4),
    'n': (2, 5), 'm': (2, 6),
}

vowels = 'yuioplkjhbnm'

answer = 0
for ch in target:
    x, y = keyboard[ch]

    # 한글쪽 모음인 경우 -> 오른쪽
    if (ch not in vowels):
        lx, ly = keyboard[l]
        answer += abs(x-lx)+abs(y-ly) + 1
        l = ch
    # 한글쪽 자음인 경우 -> 왼쪽
    else:
        rx, ry = keyboard[r]
        answer += abs(x-rx)+abs(y-ry) + 1
        r = ch

print(answer)
