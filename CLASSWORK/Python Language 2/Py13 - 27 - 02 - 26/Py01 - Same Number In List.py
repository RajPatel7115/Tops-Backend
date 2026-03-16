l = [25, 52, 67, 88, 88]
uni = []
dup = []

for i in l:
    if i not in uni:
        uni.append(i)
    else:
        dup.append(i)
    
print(uni)
print(dup)