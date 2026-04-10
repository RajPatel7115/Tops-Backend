#include<iostream>
using namespace std;
int main()
{
    //implicit
    int x=10;
    double y;
    y=x;
    cout<< "implicit conversation y = "<<y<<endl;

    //explicit
    double a=9.8;
    int b;
    b=(int)a;
    cout<< "explicit conversation b= "<<b<<endl;
}
