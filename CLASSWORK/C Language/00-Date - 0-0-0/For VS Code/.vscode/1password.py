import random
import string
from datetime import datetime

def generate_password(length):
    # Mix of letters, digits, and symbols
    characters = string.ascii_letters + string.digits + string.punctuation
    
    # Generate password
    password = ''.join(random.choice(characters) for _ in range(length))
    
    return password

def save_password(password):
    # Create file name with date
    file_name = "saved_passwords.txt"
    
    # Save with timestamp
    with open(file_name, "a") as file:
        file.write(f"{datetime.now()} : {password}\n")

# ===== MAIN PROGRAM =====

try:
    length = int(input("Enter password length: "))
    
    if length <= 0:
        print("Length must be greater than 0.")
    else:
        password = generate_password(length)
        print("\nGenerated Password:", password)
        
        save_password(password)
        print("Password saved in 'saved_passwords.txt' successfully!")

except ValueError:
    print("Please enter a valid number.")