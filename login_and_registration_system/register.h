#ifndef LOGIN_AND_REGISTRATION_SYSTEM_REGISTER_H
#define LOGIN_AND_REGISTRATION_SYSTEM_REGISTER_H

#include <iostream>
#include <libpq-fe.h>
#include <string>

using namespace std;

class person{
    int personID;
    string firstName;
    string lastName;
    string address;
    string city;
public:
    person(string fN, string lN, string a, string c, int id){
        personID = id;
        firstName = fN;
        lastName = lN;
        address = a;
        city = c;
    }
    void insertDB(person *P);
    void searchPersonBD(string fn, string ln);
};

#endif //LOGIN_AND_REGISTRATION_SYSTEM_REGISTER_H
