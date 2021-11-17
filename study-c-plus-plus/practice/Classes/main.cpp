/**
 * Flow:
 * 1. cat.h
 * 2. cat.cpp
 * 3. main.cpp
 */

#include <cstdlib>
#include<iostream>
#include "cat.h"
using namespace std;

int main(int argc, char** argv) {
    Cat cat1;
    //Outside the scope of class "Cat" mentioned in cat.h
    speak();

    //Accessing through the Class Cat
    cat1.speak();
    cat1.jump();
    return 0;
}

