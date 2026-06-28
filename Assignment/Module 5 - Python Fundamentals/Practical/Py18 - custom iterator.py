# Que :  Write a Python program that uses a custom iterator to iterate over a list of integers.

def integer_list_iterator(num_list):
    for num in num_list:
        yield num

# Example usage
numbers = [10, 20, 30, 40, 50]

for result in integer_list_iterator(numbers):
    print(result)
