# Boilerplate project for ReactJS + Amplify + AWS Cognito + Context + Hooks + Functional Components #
In this project everything works out of the box in well structured manner.
- Authentication details are available to all components via the context.
- Data is saved to Local Storage and preserved during page refreshes.
Any additional forms were not added intentionally to avoid extra libraries and extra complexity.

## Problems that are solved by this boilerplate
For developers who are just learning ReactJS it can be challening to find a robust way to leverage AWS Cognito.
Key challenges are asynchroneus calls to Cognito API which is tricky to manage.
Another challenge is React Hooks, state management and functional components (that seems to be the latest mainstream for React).
A lot of articles are going too deep, and lot of them are using class-based components. This one is just minimalistic in nature and help to start quickly.

## Set-up Notes
### Into
The project is based on the boilerplate React project (create-react-app).
Some unnecessary code was removed from it, and enriched with extra functionality.

### Configure AWS resources
Great web-site that's not only provide great example of very similar project, but also 

### install dependencies
Run ```npm start```

### config.js
Please and configure the following file at src/config.js:

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
[Another great resource explaining step-by-step the creation of fully-functional stateless application, including Cognito Authorisation](https://serverless-stack.com/chapters/what-is-serverless.html)
