#include<iostream>
using namespace std;
int main()
{
    int marks1,marks2,marks3,total,percentage;
    cout<< "enter marks 1:";
    cin>>marks1;
    cout<< "enter marks 2:";
    cin>>marks2;
    cout<< "enter marks 3:";
    cin>>marks3;

    total=marks1+marks2+marks3;
    percentage=total/3;

    if(marks1>40 && marks2>40 && marks3>40)
    {
        if(percentage>=90 && percentage<=100)
        {
            cout<<percentage<<endl;
            cout<< "Grade : A+"<<endl;
        }
        else if(percentage>=80 && percentage<90)
        {
            cout<<percentage<<endl;
            cout<< "Grade : A"<<endl;
        }
        else if(percentage>=70 && percentage<80)
        {
            cout<<percentage<<endl;
            cout<< "Grade : B"<<endl;
        }
        else if(percentage>=60 && percentage<70)
        {
            cout<<percentage<<endl;
            cout<< "Grade : C"<<endl;
        }
        else if(percentage>=50 && percentage<60)
        {
            cout<<percentage<<endl;
            cout<< "Grade : D"<<endl;
        }
        else if(percentage>=40 && percentage<50)
        {
            cout<<percentage<<endl;
            cout<< "Grade : E"<<endl;
        }
    }
    else
    {
        cout<< "you failedd";
    }
}
