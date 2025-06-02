#ifndef LOGIN_REGISTRATION_SYSTEM_LOGINS_H
#define LOGIN_REGISTRATION_SYSTEM_LOGINS_H

#include <iostream>

#include "useful.h"

using namespace std;

class Login{
private:
    string email;
    string password;
public:
    Login(string e, string p){
        this->email = e;
        this->password = p;
    }
    void forgetPassword(string e); //Will be generated a code when the user forget password
    bool checkLogin(string e, string p);
    void encryptPassword(); //A symple example of encryption
    void desincryptPassword(); //A symple example of decryption
    ~Login(){}
};

#endif //LOGIN_REGISTRATION_SYSTEM_LOGINS_H