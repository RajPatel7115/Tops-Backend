
#include <stdio.h>

// Function declaration
int factorial(int n);

int main() {
    int num, result;

    printf("Enter Number: ");
    scanf("%d", &num);

    // Function call
    result = factorial(num);

    printf("Factorial of %d = %d\n", num, result);

    return 0;
}

// Function definition
int factorial(int n) {
    int fact = 1;
    for (int i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact; // return factorial value
}
