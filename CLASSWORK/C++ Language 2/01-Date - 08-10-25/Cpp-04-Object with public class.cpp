#include<iostream>
using namespace std;

class student{
	public:
	   int rollno;
};

int main()
{
	student raj; //name is object ( can be anything )
	raj.rollno=101;
	student jayvir; //name is object ( can be anything )
	jayvir.rollno=102;
	cout<<"Raj's roll no is "<<raj.rollno<<endl;
	cout<<"Jayvir's roll no is "<<jayvir.rollno<<endl;

    return 0;
}
