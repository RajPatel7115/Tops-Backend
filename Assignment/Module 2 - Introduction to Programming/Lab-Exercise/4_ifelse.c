#include<stdio.h>
void main()
{
    int num;
    int option;
    printf("Enter Num:");
    scanf("%d",&num);
    if(num%2==0)
    {
        printf("Num is even");
    }
    else
    {
        printf("Num is odd");
    }

    printf("1.january\n");
    printf("2. february\n");
    printf("3.march\n");
    printf("4.april\n");
    printf("5.may\n");
    printf("6.june\n");
    printf("7.july\n");
    printf("8.augast\n");
    printf("9.september\n");
    printf("10.october\n");
    printf("11.november\n");
    printf("1.december\n");

    printf("enter month num:");
    scanf("%d",&option);

    switch(option)
    {
    case 1:
        printf("january");
        break;
    case 2:
        printf("february");
        break;
    case 3:
        printf("march");
        break;
    case 4:
        printf("april");
        break;
    case 5:
        printf("may");
        break;
    case 6:
        printf("june");
        break;
    case 7:
        printf("july");
        break;
    case 8:
        printf("augast");
        break;
    case 9:
        printf("september");
        break;
    case 10:
        printf("occtober");
        break;
    case 11:
        printf("november");
        break;
    case 12:
        printf("december");
        break;
    default:
        printf("select proper answer");

    }
}
