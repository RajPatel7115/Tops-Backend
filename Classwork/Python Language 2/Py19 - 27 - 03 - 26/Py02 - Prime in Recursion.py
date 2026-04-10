def prime(n, i=2):

    if n==i:
        return True
    elif n%i==0:
        return False
    
    return prime(n,i+1)

if prime(7):
    print("Yes Prime!!")
else:
    print("Not Prime!!")

    