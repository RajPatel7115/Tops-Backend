#include<stdio.h>
main()
{
	int monsalary;
	int annsalary;
	int tax;
	
	//Taking Salary Input feom user
	printf("Enter Your Salary :");
	scanf("%d",&monsalary);
	
	//salary calc monthly to yearly
	annsalary=monsalary*12;
	
	//Finding tax 
	if(annsalary>=0 && annsalary<300000)
    {
    	tax=0;
	}
	else if(annsalary>=300000 && annsalary <500000)
	{
		tax=3;
	}
	else if(annsalary>=500000 && annsalary<700000)
	{
		tax=5;
	}
	else{
		tax=10;
	}
	
	//output 
	printf("Your Annual Salary is %d\nTotal Tax : %d",annsalary,tax);
}
