class A:
    def factorial(self):
        n = int(input("Enter Number :"))
        fac = 1

        for i in range(1,n+1):
            fac = fac * i
        
        print(fac)

class B(A):
    def rev_li(self):
        n = [1, 2, 3, 4, 5]

        rev = []

        for i in n:
             rev = [i] + rev

        print(rev)

obj = B()
obj.factorial()
obj.rev_li()
