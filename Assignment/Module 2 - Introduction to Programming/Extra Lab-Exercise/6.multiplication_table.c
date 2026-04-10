#include<stdio.h>
void main()
{
    int num;
    int range;

    printf("enter number for multiplication table:");
    scanf("%d",&num);

    printf("enter range: ");
    scanf("%d",&range);

    for(int i=1;i<=range;i++)
    {
        printf("%d * %d =%d\n",num,i,num*i);
    }
}
