class Myclass:
    def fun1(self):
        print("Hello")

class Myclass2(Myclass):
    def fun1(self):
        super().fun1()
        print("Hello2")

class Myclass3(Myclass):
    def fun1(self):
        super().fun1()
        print("Hello2")

a = Myclass2()
a.fun1()

b = Myclass3()
b.fun1()

