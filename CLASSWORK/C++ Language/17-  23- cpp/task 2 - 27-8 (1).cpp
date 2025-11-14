#include<iostream>
using namespace std;
int main()
{
	int num;
	char c;
	
	cout<<"Enter Number :";
	cin>>num;
	cout<<"Enter Character :";
	cin>>c;
	
	cout<<"You Entered Num : "<<num<<endl;
	cout<<"You Entered Char : "<<c<<endl;
	if(num>18)
	{
		cout<<"Eligible"<<endl;
	}
}
