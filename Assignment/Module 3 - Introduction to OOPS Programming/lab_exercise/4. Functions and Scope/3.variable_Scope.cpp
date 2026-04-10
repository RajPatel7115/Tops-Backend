#include<iostream>
using namespace std;
class scope
{
public:
    int a=10;
    void show()
    {
        int b=20;
        cout<< "A is a global variabble "<<a<<endl;
        cout<< "B is decelred in a function so that its scope is limited "<<b;

    }
};
int main()
{
    scope s1;
    s1.show();
}
