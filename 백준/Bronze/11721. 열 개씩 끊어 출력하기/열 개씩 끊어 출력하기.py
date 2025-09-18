texts = input().strip()
for i in range(0, len(texts), 10):
    print(texts[i:i+10])
