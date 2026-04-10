# Que : Write a Python program to generate random numbers using the random module.

import random

# Generate a random float between 0.0 and 1.0
random_float = random.random()
print("Random float between 0.0 and 1.0:", random_float)

# Generate a random integer between 1 and 10
random_int = random.randint(1, 10)
print("Random integer between 1 and 10:", random_int)

# Generate a random integer in a specified range with step using randrange
random_range = random.randrange(0, 20, 2)  # Even number from 0 to 18
print("Random even number between 0 and 18:", random_range)

# Select a random element from a list
sample_list = ['apple', 'banana', 'cherry']
random_choice = random.choice(sample_list)
print("Random choice from list:", random_choice)
