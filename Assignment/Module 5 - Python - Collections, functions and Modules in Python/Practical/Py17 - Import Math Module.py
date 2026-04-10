# Que : Write a Python program to import the math module and use functions like sqrt(), ceil(),floor().

import math

# Number to use in math functions
num = 9.7

# Calculate square root
sqrt_val = math.sqrt(num)
print(f"Square root of {num} is {sqrt_val}")

# Calculate ceiling (smallest integer >= num)
ceil_val = math.ceil(num)
print(f"Ceiling of {num} is {ceil_val}")

# Calculate floor (largest integer <= num)
floor_val = math.floor(num)
print(f"Floor of {num} is {floor_val}")


# Calculate factorial
num = 5

fact = math.factorial(num)

print(f"The factorial of {num} is {fact}")