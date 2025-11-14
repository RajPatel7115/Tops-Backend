#include<iostream>
#include<fstream>
using namespace std;
main()
{
int rno,fee;
string name;
ifstream fin("student.txt");
 while(getline(fin,name))
{
      fin>>rno>>name>>fee;   //read data from the file student
      //cout<<endl<<rno<<"\t"<<name<<"\t"<<fee;
     // cout<<rno<<"\t"<<name<<endl;
      cout<<name<<" "<<rno<<endl;
}
      fin.close();
}
