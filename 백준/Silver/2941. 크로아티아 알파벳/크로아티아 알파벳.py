import sys
input = sys.stdin.readline

text = input().strip()
dic = [
    'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='
]

for ele in dic:
    text = text.replace(ele, '@')
print(len(text))
