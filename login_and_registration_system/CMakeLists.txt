cmake_minimum_required(VERSION 3.27)
project(DatabaseProject)

set(CMAKE_CXX_STANDARD 11)

# Specify the include directory for PostgreSQL
include_directories("C:/Program Files/PostgreSQL/17/include")

# Link against the PostgreSQL library
link_directories("C:/Program Files/PostgreSQL/17/lib")

add_executable(DatabaseProject main.cpp
        register.cpp
        useful.cpp)

# Link the PostgreSQL library
target_link_libraries(DatabaseProject PRIVATE libpq)
