#include<stdio.h>
void main()
{
    int num;
    int sum=0;
    printf("enter number :");
    scanf("%d",&num);

    int i;
    while(num>0)
    {
        int temp;
        temp=num%10;
        sum=sum+temp;
        num=num/10;
        i++;
    }
    printf("sum of digit is %d",sum);
}
