# Que : Write a Python program to demonstrate string slicing.

my_string = "Hello, World!"

print("Original string:", my_string)

# Slice from index 0 to 4 (first five characters)
print("Characters from index 0 to 4:", my_string[0:5])

# Slice from index 2 to 7
print("Characters from index 2 to 7:", my_string[2:8])

# Slice from index 5 to the end
print("Characters from index 5 to end:", my_string[5:])

# Slice whole string
print("Whole string:", my_string[:])

# Slice with step 2 (every second character)
print("Every second character:", my_string[::2])

# Reverse the string using slicing
print("Reversed string:", my_string[::-1])
