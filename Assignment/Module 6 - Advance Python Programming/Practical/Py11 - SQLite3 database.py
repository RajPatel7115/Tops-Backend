# Que : Write a Python program to connect to an SQLite3 database, create a table, insert data, and fetch data.

import sqlite3

# Connect to SQLite database (creates file if it doesn't exist)
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Create a table
cursor.execute('''
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER
)
''')

# Insert data into the table
cursor.execute("INSERT INTO students (name, age) VALUES (?, ?)", ("Alice", 21))
cursor.execute("INSERT INTO students (name, age) VALUES (?, ?)", ("Bob", 22))
conn.commit()  # Save (commit) the changes

# Fetch data from the table
cursor.execute("SELECT * FROM students")
rows = cursor.fetchall()

# Print the fetched data
for row in rows:
    print(row)

# Close the connection
conn.close()
