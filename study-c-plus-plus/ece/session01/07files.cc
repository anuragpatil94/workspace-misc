#include<fstream>
#include<iostream>
using namespace std;

int main()
{
    ofstream f("test.txt");
    cout<<"int:"<<sizeof(int);

    //f<<"Hello"<<5<<2+56<<'\n'<<34<<'\n';
    for(int i=0; i<1000; i++)
    {
        f<<i;
    }
    return 0;
}
