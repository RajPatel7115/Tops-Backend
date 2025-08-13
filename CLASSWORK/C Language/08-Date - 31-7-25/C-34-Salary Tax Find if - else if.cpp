#include<stdio.h>
main()
{
	int annualsal;
    int tax;
    
    //taking input from user
    printf("Enter Your Salary :");
    scanf("%d",&annualsal);
    
    if(annualsal>=0 && annualsal<300000)
    {
    	tax=0;
	}
	else if(annualsal>=300000 && annualsal <500000)
	{
		tax=3;
	}
	else if(annualsal>=500000 && annualsal<700000)
	{
		tax=5;
	}
	else{
		tax=10;
	}
	
	//output
	printf("Current Tax %d",tax);
	
}




