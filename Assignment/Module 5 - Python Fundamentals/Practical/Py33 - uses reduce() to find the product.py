#Que : Write a Python program that uses reduce() to find the product of a list of numbers.

from functools import reduce

# List of numbers
numbers = [1, 2, 3, 4, 5]

# Function to multiply two numbers
def multiply(x, y):
    return x * y

# Use reduce to apply the multiply function cumulatively
product = reduce(multiply, numbers)

print("List of numbers:", numbers)
print("Product of numbers:", product)
