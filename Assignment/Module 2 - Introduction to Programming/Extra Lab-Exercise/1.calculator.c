#include<stdio.h>
void main()
{
    float num1,num2,sum,sub,div,mult;
    int option;

    printf("1. addition\n");
    printf("2. substraction\n");
    printf("3. multiplication\n");
    printf("4. division\n");
    printf("_________________________\n");

    printf("enter your opption");
    scanf("%d",&option);


    printf("enter num 1:");
    scanf("%f",&num1);
    printf("enter num 2:");
    scanf("%f",&num2);

    switch(option)
    {
    case 1:
        sum=num1+num2;
        printf("sum is %f",sum);
        break;
    case 2:
        sub=num1-num2;
        printf("sub is %f",sub);
        break;
    case 3:
        mult=num1*num2;
        printf("mult is %f",mult);
        break;
    case 4:
        div=num1/num2;
        printf("div is %f",div);
        break;
    default:
        printf("enter appropriate option");

    }
}
