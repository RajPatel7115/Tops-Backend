# Que : Write a Python program to update a value in a dictionary.

# Create a dictionary
my_dict = {
    "name": "Rahul",
    "age": 23,
    "city": "Jamnagar"
}

# Update the value for the key 'age'
my_dict["age"] = 30

# Add a new key-value pair (if key doesn't exist)
my_dict["job"] = "Engineer"

# Print the updated dictionary
print(my_dict)


# Using update() to modify existing key and add new key
my_dict.update({"age": 21, "city": "Rajkot", "hobby": "Reading"})

print(my_dict)
