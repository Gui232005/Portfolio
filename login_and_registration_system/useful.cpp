#include "useful.h"

string useful::toLowerString(string info){
    int i = 0;

    for_each(info.begin(), info.end(), [](char& c){
        c = tolower(c);
    });

    return info;
}