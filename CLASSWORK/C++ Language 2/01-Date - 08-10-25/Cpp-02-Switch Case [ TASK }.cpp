#include<iostream>
using namespace std;
int main() //This can be used in "int" and "char" both.
{
	int day; //1-mon, 2- tues;
	cout<<"Enter Day Number : ";
	cin>>day;
	
	switch(day)
	{
		case 1 : printf("Monday \n");
		    break;
		case 2 : printf("Tuesday \n");
		    break;
		case 3 : printf("Wednesday \n");
		    break;
		case 4 : printf("Thursday \n");
		    break;
		case 5 : printf("Friday \n");
		    break;
		case 6 : printf("Saturday \n");
		    break;
		case 7 : printf("Sunday \n");
		    break;
		    
		default : printf("This Is Not Valid Day!!");
	}
}