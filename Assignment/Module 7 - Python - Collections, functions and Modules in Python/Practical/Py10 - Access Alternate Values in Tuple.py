# Que :Write a Python program to access alternate values between index 1 and 5 in a tuple.

# Define a sample tuple
my_tuple = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')

# Slice the tuple from index 1 to 5 (index 6 exclusive) with step 2 for alternate elements
alternate_values = my_tuple[1:6:2]

print("Alternate elements between index 1 and 5:", alternate_values)
