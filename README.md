
# user-email-password-auth React and Firebase Project






## Overview

This project focuses on implementing a user authentication system in a React.js application using Firebase. The setup involves creating a React app, installing the Firebase SDK, and configuring Firebase authentication with email and password. The core component `SignInComponent` allows users to sign in securely. and additional features like Sign-Up, Password Reset, and User Profile enhance user experience.  
## Features

- Register a user with Email and Password
- Password should be at least 6 char and a upper letter(if not, will show an alert);
- Have to accept terms and conditions to Register
- user can log in
- Can Reset their Password



## How to set up Firebase

###  INITIAL SETUP
1. visit: console.firebase.google.com
2. create project (skip google analytics)
3. Register app (create config)
4. install firebase: npm install firebase
5. add config file to your project
6. DANGER: Do not publish or make firebase config to public by pushing those to github.

###  INTEGRATION

7. visit: Go to Docs > Build > Authentication > Web > Get Started
8. export app from the firebase.config.js file: export default app
9. Login.jsx: import getAuth from firebase/auth
10. create const auth = getAuth(app)

###  PROVIDER SETUP

11. import googleAuthProvider and create a new provider
12. use signInWithPopUp and pass auth and provider
13. activate sign-in method (google, facebook, github, etc.)
14. [Vite]: change 127.0.0.1 to localhost

###  MORE Auth Provider
1. activate the auth provider (create app, provide redirect url, client id, client secret)
#