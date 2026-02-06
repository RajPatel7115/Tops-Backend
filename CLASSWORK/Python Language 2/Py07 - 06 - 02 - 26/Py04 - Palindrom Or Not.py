n = int(input("Enter Number :"))
rem = 0
rev = 0
n1=n

while(n!=0):
    rem = n%10 #
    rev = rev*10+rem
    n = n//10

if(n1==rev):
    print("Number Is Palindrom!!")
else:
    print("Number Not Palindrom!!")

