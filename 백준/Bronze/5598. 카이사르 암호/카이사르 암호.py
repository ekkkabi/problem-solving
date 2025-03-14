import sys
input = sys.stdin.readline

word = input().strip()

alpah = {
    'A': 'D',    'B': 'E',    'C': 'F',    'D': 'G',    'E': 'H',    'F': 'I',    'G': 'J',    'H': 'K',
    'I': 'L',    'J': 'M',    'K': 'N',    'L': 'O',    'M': 'P',    'N': 'Q',    'O': 'R',    'P': 'S',
    'Q': 'T',    'R': 'U',    'S': 'V',    'T': 'W',    'U': 'X',    'V': 'Y',    'W': 'Z',    'X': 'A',
    'Y': 'B',    'Z': 'C',
}
reverse_alpah = {v: k for k, v in alpah.items()}
answer = ''
for i in word:
    answer += reverse_alpah[i]
print(answer)
