#include<stdio.h>
void main()
{
    int num;
    printf("enter number :");
    scanf("%d",&num);

    if(num%2==0)
    {
        printf("number is even\n");
    }
    else
    {
        printf("number is odd\n");
    }

    if(num>0)
    {
        printf("number is positive\n");
    }
    else if(num<0)
    {
        printf("number is nagative\n");
    }
    else
    {
        printf("num is zero\n");
    }

    if(num%3==0 && num%5==0)
    {
        printf("number is divided by 3 and 5\n");
    }
    else
    {
        printf("number is not divided by 3 and 5\n");
    }
}
