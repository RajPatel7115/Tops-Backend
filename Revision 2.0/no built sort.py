n = [3, 7, 2, 9, 5]

for i in range(len(n)):
    for j in range(i+1, len(n)):
        if n[i] > n[j]:
            temp = n[i]
            n[i] = n[j]
            n[j] = temp

print(n)