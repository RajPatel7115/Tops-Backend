# Que : Write a Python program that filters out even numbers using the filter() function.

# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Function to check if a number is even
def is_even(num):
    return num % 2 == 0

# Use filter to select only even numbers
even_numbers = list(filter(is_even, numbers))

print("Original numbers:", numbers)
print("Even numbers:", even_numbers)
