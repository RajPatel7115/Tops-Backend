#include <stdio.h>

// Define structure
struct Student {
    char name[50];
    int roll;
    float marks;
};

int main() {
    struct Student students[3];  // Array of 3 students
    int i;

    // Input details of 3 students
    for (i = 0; i < 3; i++) {
        printf("\nEnter details for student %d:\n", i + 1);

        printf("Name: ");
        scanf("%s", students[i].name);

        printf("Roll Number: ");
        scanf("%d", &students[i].roll);

        printf("Marks: ");
        scanf("%f", &students[i].marks);
    }

    // Print student details
    printf("\n--- Student Details ---\n");
    for (i = 0; i < 3; i++) {
        printf("\nStudent %d:\n", i + 1);
        printf("Name: %s\n", students[i].name);
        printf("Roll Number: %d\n", students[i].roll);
        printf("Marks: %.2f\n", students[i].marks);
    }

    return 0;
}
