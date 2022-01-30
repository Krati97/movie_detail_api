# Login and signup using NodeJs and ExpressJs.

## Steps for project setup:
```
npm install
touch .env
```
Add MONGODB_URI, PORT, JWT_SECRET_KEY with proper values in .env file created above.
### To run the server use: 
```
nodemon server.js
```

### API End Points:
POST
1. Register(Sign Up) : /user/register
 - name (mandatory)
 - email (mandatory)
 - password (mandatory)
 - confirmPassword (mandatory)
2. Login: /user/login
 - email (mandatory)
 - password (mandatory)
3. Add Movie : user/addMovie
 - title
 - description
 - genere
PUT
1. Update Movie : user/:id  (here, id = moivieId)
 - title
 - description
 - genere
GET
1. Find all Movies : user/findMovies
Delete
1. Delete Movie : user/:id (here, id = moivieId)