# MERN Authentication and Authorization

## Libraries We are Using:

| Name | Location | Purpose |
| -------- | -------- | -------- |
| `jwt-decode` |  frontend |  Decode JWT tokens for Authorization  |
| `jsonwebtoken` | backend | generate, encrypt, decrypt json web tokens on backend |
| `axios` |  frontend |  Make calls to our "API" (our backend)  |
| `bcryptjs` | backend | Password hashing |
| `passport` | backend | Session management |


## Initial Project Setup
- [ ] Create Backend folder
- [ ] Setup .gitignore at global level
- [ ] Initialize git + make first commit
- [ ] `create-react-app frontend` to create your frontend half of our decoupled app


## Frontend
- [ ] 1. Get rid of all default `create-react-app` content that is not necessary for our app.
- [ ] 2. Install all necessary libraries. 
- [ ] 3. Declare components for Navbar and other App essentials (make scaffolding)
- [ ] 4. Write API call to check for user login and user register
- [ ] 5. Write JWT Token search throughout auth locked pages for authorization


## Backend
- [ ] 1. Initialize Express server and install + import all required libraries.
- [ ] 2. Create a `/config/passport.js` to configure your passport setup for sessions. With each new page pass, check for JWT token using passport. 
- [ ] 3. Define User model and imply using Mongoose.
- [ ] 4. Define API CRUD routes using Express as they relate to User model (`/register`, `/login`)

