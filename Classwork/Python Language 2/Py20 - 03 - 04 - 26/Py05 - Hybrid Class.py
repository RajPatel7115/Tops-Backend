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

class C:
    def fibbo(self):
        n = 10

        a = 0
        b = 1

        for i in range(n):
            print(a)
            c = a + b
            a = b
            b = c

class D(B,C):
    def palindrom(self):
        n = input("Enter number: ")

        rev = ""

        for i in n:
          rev = i + rev

        if n == rev:
            print("Palindrome")
        else:
           print("Not Palindrome")

obj = D()
obj.factorial()
obj.fibbo()
obj.palindrom()
obj.rev_li()