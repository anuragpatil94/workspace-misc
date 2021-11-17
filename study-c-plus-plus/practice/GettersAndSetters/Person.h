/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   Person.h
 * Author: aspan
 *
 * Created on May 28, 2017, 7:30 PM
 */

#ifndef PERSON_H
#define PERSON_H

#include<iostream>
using namespace std;

class Person {
public:
    Person();
    ~Person();
    string toString();
    void setName(string newName);
    string getName();
private:
    string name;

};

#endif /* PERSON_H */

