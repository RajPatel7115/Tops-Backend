# Que : Write a Python program to create a class and access its properties using an object.

# Define a class named Person
class Person:
    def __init__(self, name, age):
        self.name = name  # Property: name
        self.age = age    # Property: age

# Create an object of the Person class
person1 = Person("raj", 23)

# Access and print the object's properties
print(f"Name: {person1.name}")
print(f"Age: {person1.age}")
