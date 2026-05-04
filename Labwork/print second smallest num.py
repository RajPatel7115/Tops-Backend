"""Write a function that:

takes a list
prints the second smallest number"""

def small(s):
    n = s
    for i in range(1,len(n)):
        for j in range(i+1,len(n)):
            if n[i] > n[j]:
                temp = n[i]
                n[i] = n[j]
                n[j] = temp

    print(n[1])

small([1,5,7,8,9,3,7])