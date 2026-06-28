# Que : Write a Python program to print a string from the last character.

def last_character(s):
    # Access the last character using negative index -1
    last_char = s[-1]
    print("Last character of the string:", last_char)

# Example usage
my_string = "Hello, World!"
last_character(my_string)
