def fac(n):
    if n==1: # Base case
        return 1
    else:
        return n*fac(n-1)
    
print(fac(5))