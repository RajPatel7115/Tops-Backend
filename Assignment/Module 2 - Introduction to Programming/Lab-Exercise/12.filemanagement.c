#include <stdio.h>

int main() {
    FILE *fp;
    char str[100];

    // Open file in write mode
    fp = fopen("example.txt", "w");
    if (fp == NULL) {
        printf("Error creating file!\n");
        return 1;
    }

    // Write string into file
    printf("Enter a string to write into file: ");
    fgets(str, sizeof(str), stdin);   // allows spaces
    fputs(str, fp);

    fclose(fp);  // Close file after writing
    printf("String written to file successfully.\n");

    // Open file in read mode
    fp = fopen("example.txt", "r");
    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    // Read and display contents
    printf("\nContents of file:\n");
    while (fgets(str, sizeof(str), fp) != NULL) {
        printf("%s", str);
    }

    fclose(fp);  // Close file after reading
    return 0;
}
