#include<stdio.h>
int maxval(int arr[],int size)
{
	int max=arr[0];
	for(int i=1;i<size;i++)
	{
		if(arr[i]>max)
		{
			max=arr[i];
		}
	}
	return max;
}
void printarray(int arr[],int size)
{
	for(int i=0;i<size;i++)
	{
		printf("%d\n",arr[i]);
	}
}
main()
{
	int a[3];
	for(int i=0;i<3;i++)
	{
		printf("Enter Number :");
		scanf("%d",&a[i]);
	}
	printf("\nArray Numbers Are :\n");
	printarray(a,3);
	
	int max = maxval(a, 3);
	printf("Maximum Value Is : %d\n",max);
}
