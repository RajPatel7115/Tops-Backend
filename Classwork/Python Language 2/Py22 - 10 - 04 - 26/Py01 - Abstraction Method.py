from abc import ABC, abstractmethod

class Employer(ABC):

    @abstractmethod
    def salary(self):
        pass


class Raj(Employer):
    def salary(self):
        return 10000


class Manish(Employer):
    def salary(self):
        return 15000


obj = Raj()
print(obj.salary())

obj = Manish()
print(obj.salary())