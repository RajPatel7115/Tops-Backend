#include<stdio.h>
int main()
{
	FILE *fp1;
	fp1=fopen("file1.txt","w"); //oprning file
	
	fprintf(fp1,"Raj\n"); //type in file
	fprintf(fp1,"Jayvir\n"); //type in file
	
	printf("File Written");
	fclose(fp1); //closing file
	return 0;
}
