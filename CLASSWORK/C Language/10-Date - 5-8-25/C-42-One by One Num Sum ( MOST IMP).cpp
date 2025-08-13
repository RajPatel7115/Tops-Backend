#include<Stdio.h>
main()
{
	int num=123;
	int sum=0;
	
	while(num>0)
	{
		int temp=num%10;
		sum=sum+temp;
		num=num/10;
	}
	printf("Sum of Digit : %d",sum);
}
