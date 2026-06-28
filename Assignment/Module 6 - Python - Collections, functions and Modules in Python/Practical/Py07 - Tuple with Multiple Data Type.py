# Que :Write a Python program to create a tuple with multiple data types.

# Create a tuple with elements of different data types
mixed_tuple = (42, "Hello, World!", 3.14, True, [1, 2, 3])

print(mixed_tuple)

# Print the data type of each element in the tuple
for element in mixed_tuple:
    print(f"{element} is of type {type(element)}")
