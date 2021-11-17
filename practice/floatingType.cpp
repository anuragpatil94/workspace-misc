#include<iostream>
#include<iomanip>
using namespace std;
int main(){

    float val=76.4;
    cout<<val<<endl;

    //keywords from iomanip- i/o manipulation
    cout<<scientific<<val<<endl;
    //fixed size of a value
    cout<<fixed<<val<<endl;
    //precise upto 20 digits
    cout<<setprecision(20)<<fixed<<val<<endl;

    //Double more precise than float
    double dVal=76.4;
    cout<<setprecision(20)<<fixed<<dVal<<endl;
    long double lVal=76.423623562 ;
    cout<<setprecision(20)<<fixed<<lVal<<endl;
    return 0;
}
