#include<stdio.h>
main()
{
	int dollor;
	int rate = 85;
	int inr;
	
	printf("Enter Dollor Amount : ");
	scanf("%d",&dollor);
	
	inr=dollor*rate;
	
	printf("%d Dollor to INR is : %d",dollor,inr);
}
