#include<stdio.h>
void printarray(int arr[])
{
	for(int i=0;i<3;i++)
	{
		printf("%d\n",arr[i]);
	}
}
main()
{
	int a[3];
	for(int j=0;j<3;j++)
	{
		printf("Enter NUmber :");
		scanf("%d",&a[j]);
	}
	
	int b[]={35,54,65};
	printarray(a);
	printarray(b);
}
