d1 = {'p':400,'q':200}
d2 = {'p':200,'q':100,'r':200}
d3 = {}

for i,j in d1.items():
    for k ,i in d2.items():
        if i==k:
            d3[i] = j+i

print(d3)