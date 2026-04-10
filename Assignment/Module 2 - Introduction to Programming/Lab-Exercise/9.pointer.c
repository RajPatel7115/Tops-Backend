#include<stdio.h>
void main()
{
    int a=1000;
    int *p;
    p=&a;
    printf("%d\n",a);
    *p=900;
    printf("%d",a);
}
