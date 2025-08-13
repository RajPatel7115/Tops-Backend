#include<stdio.h>
int k=10;
void disp()
{
	printf("Disp %d",k);
}
main()
{
	k++;
	printf("Main %d",k);
	disp();
}
