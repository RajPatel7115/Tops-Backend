# Que :Write a Python program to access values using dictionary keys.

# Create a dictionary
my_dict = {
    "name": "Rahul",
    "age": 23,
    "city": "Jamnagar",
    "job": "Soft. Developer",
    "hobby": "Photography",
    "is_student": True
}

# Access values using keys
print("Name:", my_dict["name"])
print("Age:", my_dict["age"])
print("City:", my_dict["city"])

# Accessing a key that might not exist (use get() method to avoid error)
print("Job:", my_dict.get("job"))
print("Country:", my_dict.get("country", "Not Available"))  # Default value if key doesn't exist
