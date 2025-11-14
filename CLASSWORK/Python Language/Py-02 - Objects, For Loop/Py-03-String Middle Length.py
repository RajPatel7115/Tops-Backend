s = input("Enter a name : ")
if len(s)%2==0:
    print("Enter odd lenth of name :")
else:
    mid = len(s)//2
    print(s[mid])