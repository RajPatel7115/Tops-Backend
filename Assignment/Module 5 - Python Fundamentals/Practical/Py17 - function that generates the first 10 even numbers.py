# Que : Write a generator function that generates the first 10 even numbers.

def generate_even_numbers():
    num = 2
    count = 0
    while count < 10:
        yield num
        num += 2
        count += 1

# Example usage:
for i in generate_even_numbers():
    print(i)
