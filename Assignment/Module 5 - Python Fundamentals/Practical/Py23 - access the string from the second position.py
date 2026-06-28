# Que : Practical Example: 5) Write a Python program to access the string from the second position onwards using slicing.

def get_substring_from_second(s):
    return s[1:]  # Slice from index 1 to the end

# Example usage
my_string = "Hello, World!"
substring = get_substring_from_second(my_string)
print("Substring from second position onwards:", substring)
