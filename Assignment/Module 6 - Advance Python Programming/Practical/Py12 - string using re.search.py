# Que : Write a Python program to search for a word in a string using re.search().

import re

# Sample string
text = "Hello, welcome to the world of Python programming."

# Word to search
word = "Python"

# Search for the word in the string
if re.search(word, text):
    print(f"'{word}' found in the string.")
else:
    print(f"'{word}' not found in the string.")
