#include<stdio.h>
void main()
{
    int num1,num2;
    float sum,sub,div,mult;

    printf("Enter Num1:");
    scanf("%d",&num1);

    printf("Enter Num2:");
    scanf("%d",&num2);

    sum=num1+num2;
    sub=num1-num2;
    div=(float)num1/num2;
    mult=num1*num2;

    printf("sum is %f\n",sum);
    printf("substarction is %f\n",sub);
    printf("division is %.2f\n",div);
    printf("multiplication is %f\n\n\n",mult);

    if(num1>num2)
    {
        printf("%d is grater than %d",num1 ,num2);
    }
    else
    {
        printf("%d is grater than %d",num2,num1);
    }
}
