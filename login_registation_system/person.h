#ifndef LOGIN_REGISTRATION_SYSTEM_PERSON_H
#define LOGIN_REGISTRATION_SYSTEM_PERSON_H

#include <iostream>

using namespace std;

class Person {
private:
    string fname;
    string lname;
    string address;
    string email;
public:
    Person(string fname, string lname, string address, string email){
        this->fname = fname;
        this->lname = lname;
        this->address = address;
        this->email = email;
    }
    ~Person(){}
    void importFromDataBase();
    void exportToDataBase();
};

#endif //LOGIN_REGISTRATION_SYSTEM_PERSON_H
