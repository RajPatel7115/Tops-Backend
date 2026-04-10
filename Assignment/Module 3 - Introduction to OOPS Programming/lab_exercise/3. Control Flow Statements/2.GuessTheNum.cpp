#include<iostream>
using namespace std;
int main()
{
    int num=67;
    int guess=0;
    int attempts;
    while(guess!=num)
    {
        cout<< "Guess the num"<<endl;
        cin>>guess;
        if(guess>num)
        {
            cout<< "too high! try again"<<endl;
        }
        else if(guess<num)
        {
            cout<< "too low! try again"<<endl;
        }
        attempts++;
    }
    if(guess=num)
    {
        cout<< "Congrats! You guess correct"<<endl;
        cout<< "attempts :"<<attempts;
    }
}
