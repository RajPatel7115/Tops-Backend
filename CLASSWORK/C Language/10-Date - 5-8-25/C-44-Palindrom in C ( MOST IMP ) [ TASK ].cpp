#include<stdio.h>
main()
{
	int num=919;
	int reverse=0;
	
	while(num>0)
	{
		int temp=num%10;
		reverse=reverse*10+temp;
		num=num/10;
	}
	printf("Digit is : %d",reverse);
	
	
}
