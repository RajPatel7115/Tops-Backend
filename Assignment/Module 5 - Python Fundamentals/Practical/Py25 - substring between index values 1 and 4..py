#Que : Write a Python program to print the substring between index values 1 and 4.

def get_substring_between(s, start, end):
    return s[start:end]

# Example usage
my_string = "Hello, World!"
substring = get_substring_between(my_string, 1, 4)
print("Substring between index 1 and 4:", substring)
