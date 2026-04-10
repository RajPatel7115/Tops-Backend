#include<stdio.h>
void main()
{
    float marks1,marks2,marks3,total,percentage;
    int option,extend;
    printf("enter marks 1: ");
    scanf("%f",&marks1);
    printf("enter marks 2: ");
    scanf("%f",&marks2);
    printf("enter marks 3: ");
    scanf("%f",&marks3);

    total=marks1+marks2+marks3;
    percentage=total*100/300;


    do{
    printf("1. see your percentage\n");
    printf("2. see your grade\n");

    printf("enter option");
    scanf("%d",&option);

    switch(option)
    {
    case 1:
        printf("your percentage is %f",percentage);
        break;
    case 2:
        if(percentage>=90)
        {
            printf("your grade is A");
        }
        else if(percentage>=75 && percentage<90)
        {
            printf("your grade is B");
        }
        else if(percentage>=50 && percentage<75)
        {
            printf("your grade is C");
        }
        else
        {
            printf("your grade is D");
        }
        break;
    default:
        printf("select appropriate answer");
    }
    printf("press 3 for continue :");
    scanf("%d",&extend);
    }
    while(extend==3);
}
