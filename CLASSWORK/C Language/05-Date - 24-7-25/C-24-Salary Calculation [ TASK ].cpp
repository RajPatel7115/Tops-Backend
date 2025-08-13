#include<stdio.h>
main() 
{
    int basic, da, hra, gross, tax, net;

    //taking input from user
    printf("Enter Your Salary :");
    scanf("%d",&basic);

    //Calculations
    da=basic*2/100; // 2% da
    hra=basic*3/100; // 3% hra
    gross=basic+da+hra;
    tax=gross*3/100; // 3% tax
    net=gross-tax;

    // Output
    printf("\nSalary Details:-\n");
    printf("Your Basic Salary : %d\n",basic);
    printf("DA : %d\n",da);
    printf("HRA : %d\n",hra);
    printf("Gross Salary : %d\n",gross);
    printf("Tax Cut : %d\n",tax);
    printf("Net Salary : %d\n",net);
}

