# Que : Write a Python program to match a word in a string using re.match().

import re

# Sample string
text = "Hello, welcome to the world of Python programming."

# Word to match at the beginning
word = "Hello"

# Use re.match to check if the string starts with the word
match = re.match(word, text)

if match:
    print(f"'{word}' matches the start of the string.")
else:
    print(f"'{word}' does not match the start of the string.")
