#Que : Write a Python program to access a string up to the fifth character.

def get_substring_up_to_fifth(s):
    return s[:5]  # Slice from start up to (but not including) index 5

# Example usage
my_string = "Hello, World!"
substring = get_substring_up_to_fifth(my_string)
print("Substring up to the fifth character:", substring)
