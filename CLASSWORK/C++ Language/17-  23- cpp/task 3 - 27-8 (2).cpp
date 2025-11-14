#include<iostream>
using namespace std;

int main()
{
	int a;
	cout<<"1. C Language"<<endl;
	cout<<"2. C++ Language"<<endl;
	cout<<"3. Java Language"<<endl;
	
	a=2;
	
	switch(a)
	{
		case 1:
		    cout<<"You Selected C Language"<<endl;
		    break;
	    case 2:
		    cout<<"You Selected C++ Language"<<endl;
		    break;
		case 3:
		    cout<<"You Selected Java Language"<<endl;
		    break;
		default:
			cout<<"Please Choose Correct Option"<<endl;
	}
	
}
