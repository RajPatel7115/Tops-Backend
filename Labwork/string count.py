s = input("Enter :")
d = {}

for i in s:
    if i in d:
        d[i] = d[i] + 1
    else:
        d[i] = 1

print(d)