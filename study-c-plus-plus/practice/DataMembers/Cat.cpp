#include <iostream>
#include "Cat.h"

using namespace std;

void Cat::speak() {
    if (happy) {
        cout << "Meow!!" << endl;
    } else {
        cout << "Sssssssssss...." << endl;
    }
}
void Cat::makehappy(){
    happy=true;
}
void Cat::makeSad(){
    happy=false;
}