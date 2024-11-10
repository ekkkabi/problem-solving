n = int(input().strip())

dic = {}
for i in range(n):
    files = input().strip()
    files = files[files.rfind('.')+1:]

    if (files not in dic):
        dic[files] = 1
    else:
        dic[files] += 1

for j in sorted(dic):
    print(f'{j} {dic[j]}')