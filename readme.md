Kindly install dependency using npm install
.env

PORT = 5000
JWT_SECRET = "veryimportantsecret"
JWT_LIFETIME = '90m'
MYSQL_HOST = 'localhost'
MYSQL_PASSWORD = '' // kindly enter respectively
MYSQL_DATABASE = 'spacematrix'
MYSQL_USERNAME = 'private' // kindly enter accordingly
MYSQL_PORT = 3306

Request routes
POST:
http://localhost:5000/register
example req:
{
"email":"Loumyadev",
"password": "1234"
}

http://localhost:5000/login

example req:

{
"email":"Soumyadev",
"password": "1234"
}

GET:

http://localhost:5000/home

Requires Authorization Header with Bearer token
Example:
Authorisation: Bearer kjnkdjscbskjbksbvksbvksjdbviksbvsdbvsjbvksdjbvisbvisdbvisdbv
