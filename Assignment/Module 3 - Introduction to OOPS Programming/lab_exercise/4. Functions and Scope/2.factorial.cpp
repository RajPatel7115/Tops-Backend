#include<iostream>
using namespace std;
class fact
{
public:
    int factorial(int n)
    {

        if(n==0)
        {
            return 1;
        }
        else{
            return n*factorial(n-1);
        }
    }
};
int main()
{
    fact f1;
    int result=f1.factorial(5);
    cout<<"result is "<<result;
}
