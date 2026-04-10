#include <stdio.h>
void main()
{
    float num1, num2, num3;
    int flag, option;

    printf("Enter number 1 : ");
    scanf("%f", &num1);
    printf("Enter number 2 : ");
    scanf("%f", &num2);
    printf("Enter number 3 : ");
    scanf("%f", &num3);

    do
    {
        printf("1. Largest number\n");
        printf("2. Smallest number\n");
        printf("Enter your choice : ");
        scanf("%d", &option);

        switch (option)
        {
        case 1:
            if (num1 >= num2 && num1 >= num3)
                printf("Largest number is: %f\n", num1);
            else if (num2 >= num1 && num2 >= num3)
                printf("Largest number is: %f\n", num2);
            else
                printf("Largest number is: %f\n", num3);
            break;

        case 2:
            if (num1 <= num2 && num1 <= num3)
                printf("Smallest number is: %f\n", num1);
            else if (num2 <= num1 && num2 <= num3)
                printf("Smallest number is: %f\n", num2);
            else
                printf("Smallest number is: %f\n", num3);
            break;

        default:
            printf("Enter appropriate choice!\n");
        }

        printf("\nEnter 3 to continue or any other key to exit: ");
        scanf("%d", &flag);

    } while (flag == 3);
}
