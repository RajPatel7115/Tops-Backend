#include<stdio.h>
int currency(int dollor,int rate,int inr);
main()
{
	int dollor,inr;
	int rate = 85;
	printf("Enter Dollors :");
	scanf("%d",&dollor);
	
	int result=currency(dollor,rate,inr);
	printf("USD %d to INR is %d",dollor,result);
}
int currency(int dollor,int rate, int inr)
{
	return inr=dollor*rate;
}
