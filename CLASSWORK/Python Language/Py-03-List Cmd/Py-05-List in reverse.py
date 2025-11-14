a = [10,45,23,89,35,67,100,123]

for i in range(0,len(a)):
    for j in range(i+1, len(a)):

        if a[i]>a[j]:
            a[i],a[j]=a[j],a[i]

print(a)