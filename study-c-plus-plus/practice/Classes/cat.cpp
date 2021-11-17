#include<iostream>
#include "cat.h"

using namespace std;

//Binded to class Cat mentioned in cat.h
void Cat::speak() {
    cout << "Meow!!!" << endl;
}

//Binded to class Cat mentioned in cat.h
void Cat::jump(){
    cout << "Jumping on the top";
}

//Outside the scope of the class Cat
void speak(){
    cout << "hello" <<endl;
}