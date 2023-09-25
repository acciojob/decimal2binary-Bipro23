def decimal_to_binary(decimal_number):
    binary_number = bin(decimal_number)
    return binary_number[2:]

# Example Usage
input_number = int(input("Enter a decimal number: "))
binary_equivalent = decimal_to_binary(input_number)
print(f"The binary equivalent of {input_number} is: {binary_equivalent}")