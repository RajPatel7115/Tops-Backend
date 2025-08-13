#include<stdio.h>
main()
{
	int num=788;
	int sum=0;
	
	while(num>0)
	{
		int temp=num%10;
		temp=temp*temp*temp;
		sum=sum+temp;
		num=num/10;
	}
	printf("Digit is : %d",sum);
}
