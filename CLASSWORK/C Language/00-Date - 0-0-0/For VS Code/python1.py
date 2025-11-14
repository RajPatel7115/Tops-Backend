d = {}
n = int(input("Enter Number of Dictionaries: "))

for i in range(1, n + 1):
    key = f"dict{i}"
    n1 = int(input("Enter Inner Key: "))
    n2 = int(input("Enter Inner Value: "))
    d[key] = {n1: n2} 

print(d)