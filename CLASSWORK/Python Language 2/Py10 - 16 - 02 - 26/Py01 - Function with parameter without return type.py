def rev(n,rev1=0,rem=0):
    while(n!=0):
        rem = n%10
        rev1 = rev1*10+rem
        n=n//10
    
    print(rev1)

n1 = int(input("Enter Number :"))
rev(n1)

# def rev(n,rev1=0,rem=0): ---- Parameter
# fun1(1625,10) ---- Arguments