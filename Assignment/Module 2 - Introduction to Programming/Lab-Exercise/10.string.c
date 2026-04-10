#include<stdio.h>
#include<string.h>
void main()
{
    char str1[100],str2[100];
    printf("enter string 1:");
    scanf("%s",str1);
    printf("enter string 2:");
    scanf("%s",str2);
    strcat(str1,str2);
    printf("strcat:%s\n",str1);
    printf("lenghth of string is %d",strlen(str1));
}
