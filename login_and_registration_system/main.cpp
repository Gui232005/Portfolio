#include "useful.h"
#include "register.h"

#include <iostream>
#include <libpq-fe.h>

/*Here only use tables person and login*/

using namespace std;

void testConnectionWithDataBase(){
    PGconn *conection;
    PGresult *result;

    conection = PQsetdbLogin("localhost", "5432", nullptr, nullptr, "ai2", "postgres", "fial2005");
    if(PQstatus(conection) != CONNECTION_BAD){
        cout << "Connected" << endl;
        if (result != nullptr){
            int tuples = PQntuples(result);
            int fields = PQnfields(result);
            cout << "Number of lines " << tuples << endl;
            cout << "Number of fields " << fields << endl;
            cout << "Name of fields: " << endl;
            cout << "==================" << endl;
            for(int i = 0;i < fields; ++i){
                cout<<PQfname(result,i)<<" | ";
            }
        }
    }
}

int main() {
    //testConnectionWithDataBase();
    /*string option;
    useful * U = new useful();
    cout << "===Welcome to login as registration system===" << endl;
    cout << "> Register " << endl;
    cout << "> Login " << endl << endl;
    cout << ">>> "; //insert a string you want to use
    cin >> option;

    option = U->toLowerString(option);


    if(option == "register")
        cout << "You going to register functions" << endl;
    else cout << "You going to login functions" << endl;
*/
    return 0;
}
