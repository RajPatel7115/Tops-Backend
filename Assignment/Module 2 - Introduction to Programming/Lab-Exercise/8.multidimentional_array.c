#include<stdio.h>
void main()
{
    int n;
    printf("entr number of element:");
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++)
    {
        printf("enter element :");
        scanf("%d",&arr[i]);
    }
    int sum=0;
    for(int j=0;j<n;j++)
    {
        sum=sum+arr[j];
    }
    printf("%d",sum);
}
