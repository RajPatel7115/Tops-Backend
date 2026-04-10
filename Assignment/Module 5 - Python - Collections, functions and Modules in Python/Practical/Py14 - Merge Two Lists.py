# Que :Write a Python program to merge two lists into one dictionary using a loop.

# Define two lists: one for keys and another for values
keys = ['name', 'age', 'city', 'job']
values = ['Alice', 28, 'New York', 'Engineer']

# Initialize an empty dictionary
merged_dict = {}

# # Loop through both lists and add key-value pairs to the dictionary
for i in range(len(keys)):
    merged_dict[keys[i]] = values[i]
    
# for i in range(min(len(keys), len(values))):
#     merged_dict[keys[i]] = values[i]

# Print the resulting dictionary
print(merged_dict)
