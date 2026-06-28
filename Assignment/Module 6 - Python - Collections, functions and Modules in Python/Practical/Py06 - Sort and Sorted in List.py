# Que :Write a Python program to sort a list using both sort() and sorted().

# Create a list of numbers
numbers = [5, 2, 9, 1, 7]

# Using sort() method - sorts the list in place and returns None
numbers.sort()
print("List after sort():", numbers)

# Create another unsorted list
numbers2 = [5, 2, 9, 1, 7]

# Using sorted() function - returns a new sorted list and leaves original unchanged
sorted_numbers = sorted(numbers2)
print("Original list before sorted():", numbers2)
print("New sorted list from sorted():", sorted_numbers)
