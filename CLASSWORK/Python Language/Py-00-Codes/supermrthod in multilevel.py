class Myclass:
    def fun1(self):
        print("Hello")

class Myclass2():
    def fun1(self):
        super().fun1()
        print("Hello2")

class Myclass3(Myclass2,Myclass):
    def fun1(self):
        super().fun1()
        print("Hello2")

obj = Myclass3()
obj.fun1()
