#include<iostream>
#include<cstdint> //for portability in different OS
using namespace std;

//Global Variables
int x;

int main()
{
    cout<<"Hello" << '\n';

    //basic datatypes
    int a=1;
    short int b=2;  //16bits
    long c;         //not initialized - Hence it contains random junk in c and c++
    long long d;
    unsigned int e=2;
    char f;

    //Different sizes on different OS
    //from csstdint
    int32_t i=0;


    cout<<3 * 4 << endl;
    cout<<3 / 4 <<endl;
    cout<<3 % 4 <<endl;
    return 0;
}
