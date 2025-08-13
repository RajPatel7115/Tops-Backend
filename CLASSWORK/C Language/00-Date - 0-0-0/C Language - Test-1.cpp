#include <stdio.h>

int main() {
    int a[3], i, max;

    for(i = 0; i < 3; i++) {
        printf("Enter Number: ");
        scanf("%d", &a[i]);
    }

    printf("\nArray Elements:\n");
    for(i = 0; i < 3; i++) {
        printf("%d\n", a[i]);
    }

    max = a[0];
    for(i = 1; i < 3; i++) {
        if(a[i] > max) {
            max = a[i];
        }
    }

    printf("Maximum Value: %d\n", max);

    return 0;
}
