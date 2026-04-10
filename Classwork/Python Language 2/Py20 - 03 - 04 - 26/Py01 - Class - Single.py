class A:
    def fun1(self):
        print("Method 1 !!")

class B(A):
    def fun2(self):
        print("Method 2 !!")

obj = B()
obj.fun1()
obj.fun2()


