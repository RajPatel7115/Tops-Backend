#include<iostream>
using namespace std;
int main()
{
    string str;
    cout<< "enter string :";
    cin>>str;
    string rev;
    rev=str;
    int n=str.length();
    for(int i=0;i<n/2;i++)
    {
        char temp=str[i];
        str[i]=str[n-i-1];
        str[n-i-1]=temp;
    }
    if(rev==str)
    {
        cout<< "this is a palindrome ";
    }
    else
    {
        cout<< "this is not a palindrome";
    }
}
