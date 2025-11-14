#include<stdio.h>
int currency()
{
	int dollor;
	int rate = 85;
	int inr;
	
	printf("Enter Dollor Amount : ");
	scanf("%d",&dollor);
	
	inr=dollor*rate;
	
	printf("%d Dollor to INR is : %d",dollor,inr);
}

int main()
{
	currency();
}
