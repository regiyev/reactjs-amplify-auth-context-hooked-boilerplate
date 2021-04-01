# Boilerplate project for ReactJS + Amplify + AWS Cognito + Context + Hooks + Functional Components #
In Scope:

- ReactJS web-application
- Authentication leveraging AWS Cognito via Amplify library officially supported by AWS
- useContext is leveraged to make authentication details (user attributes, auth status) and functions (such as login, logout etc.) centralised in one file and available via interfact to all child components within app
- functional components are used instead of class-based components
- leveraging hooks
- Authentication data is saved to Local Storage and preserved during page refreshes. It's done by Amplify but the app leverages this feature.

Out of Scope:

Forms were not added intentionally to avoid extra libraries and extra complexity.
In this project, everything works out of the box in well-structured and minimalistic manner.

## Problems that are solved by this boilerplate
It can be challenging for developers who are just learning ReactJS to find a robust way to leverage AWS Cognito.
Key challenges are asynchronous calls to Cognito API, which is tricky to manage.
Another challenge is React Hooks, state management, and functional components (that seem to be the latest React).
A lot of articles are going too deep, and a lot of them are using class-based components. 
This project is just minimalistic and help to start quickly with authorisation that works right away.

## Set-up Notes
### Into
The project is based on the boilerplate React project (create-react-app).
Some unnecessary code was removed from it, and enriched with extra functionality.

### Configure AWS resources
Great guide how to do everything on AWS side can be found by link below (see serverless-stack.com).

### install dependencies
Run ```npm install```. It will install packages specified in ```package.json```.
Run ```npm start``` to launch the app on localhost.

### config.js
Configure the following file at src/config.js. Ideally it should be added to .gitignore (or abstracted in other ways) once it's done.

```
const config = {
  cognito: {
      REGION: "***",
      USER_POOL_ID: "***",
      APP_CLIENT_ID: "***",
      IDENTITY_POOL_ID: "***",
  },
  testUserCreds: {
      username: "***",
      password: "***",
  }
};

export default config;
```

### .env
Specify the desired port to run the web app by adding the following content to the file:
```PORT=3011```
By default, the app will run on port 3000 after ```npm start```

## Credits
[Key article that inspried this project. Many thanks to author!](https://itnext.io/creating-reusable-abstractions-with-amplify-and-react-hooks-97784c8b5c2a)
[serverless-stack.com - Another great resource explaining step-by-step the creation of fully-functional stateless application, including Cognito Authorisation](https://serverless-stack.com/chapters/what-is-serverless.html)
