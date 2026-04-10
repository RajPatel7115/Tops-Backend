class A:
    def factorial(self):
        n = int(input("Enter Number :"))
        fac = 1

        for i in range(1,n+1):
            fac = fac * i
        
        print(fac)

class B:
    def rev_li(self):
        n = [1, 2, 3, 4, 5]

        rev = []

        for i in n:
             rev = [i] + rev

        print(rev)

class C(A,B):
    def fibbo(self):
        n = 10

        a = 0
        b = 1

        for i in range(n):
            print(a)
            c = a + b
            a = b
            b = c

obj = C()
obj.factorial()
obj.rev_li()
obj.fibbo()
