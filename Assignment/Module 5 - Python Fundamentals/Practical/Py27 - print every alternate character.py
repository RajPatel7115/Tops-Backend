# Que : Practical Example: 9) Write a Python program to print every alternate character from the string starting from index 1.

def print_alternate_chars(s):
    # Slice the string starting from index 1, taking every second character
    result = s[1::2]
    print("Every alternate character from index 1:", result)

# Example usage
my_string = "Hello, World!"
print_alternate_chars(my_string)
