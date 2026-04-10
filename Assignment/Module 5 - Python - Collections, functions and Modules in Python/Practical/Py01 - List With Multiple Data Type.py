# Que :Write a Python program to create a list with elements of multiple data types (integers,strings, floats, etc.).

# Create a list with elements of different data types
mixed_list = [42, "hello", 3.14, True, [1, 2, 3], {"key": "value"}]

print(mixed_list)

# Print the data type of each element in the list
for element in mixed_list:
    print(f"{element} is of type {type(element)}")
