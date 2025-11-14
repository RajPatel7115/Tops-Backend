#include<iostream>
#include<fstream>
using namespace std;
main()
{
	fstream fio;
	
	int rno,fee;
	char name[50];
	
	cout<<"Enter Roll Number :";
	cin>>rno;
	cout<<"\nEnter The Name :";
	cin>>name;
	cout<<"\nEnter The Fees :";
	cin>>fee;
	
	fio.open("student.txt",ios::app); //for not over writing the file and data remain
	
	fio<<rno<<"\t"<<name<<"\t"<<fee;
	
	fio.close();
	
	return 0;
}
