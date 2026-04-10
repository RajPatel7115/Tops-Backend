#include<iostream>
using namespace std;
int main()
{
    int arr[]={10,20,30,40};
    int length,average;
    int sum=0;
    length=sizeof(arr)/sizeof(arr[0]);
    for(int i=0;i<=length;i++)
    {
        sum=sum+arr[i];
    }
    average=sum/length;
    cout<< "sum :"<<sum<<endl;
    cout<< "average :"<<average<<endl;
}
