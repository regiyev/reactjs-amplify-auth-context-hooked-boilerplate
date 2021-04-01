import React from "react";
import config from '../config';
import { useUser } from '../contexts/UserContext';


const UserProfile = () => {
  // const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);

  // get access to the login function
  const { login, logout, user } = useUser();
  
  // a handler for when the user clicks the "login" button
  // const handleLoginSubmit = async (values, { setSubmitting, setErrors }) => {
  const handleLoginSubmit = async () => {
    try {
      
      // wait to see if login was successful (we don't care about the return
      // value here)
      await login(config.testUserCreds.username, config.testUserCreds.password);
      
      
      // mark the form as non-subbmitting
      //setSubmitting(false);
    } catch (e) {
      console.log("Exception during login: ", e);
    }
  };

  const handleLogoutSubmit = async () => {
    try {      
      // wait to see if login was successful (we don't care about the return
      // value here)
      await logout();            
      // mark the form as non-subbmitting
      //setSubmitting(false);
    } catch (e) {
      console.log("Exception during logout: ", e);
    }    
  }

  const UserAuthInfo = () => {    
    // <p>Logged in as user: {user.challengeParam.userAttributes.email}</p>    
    if (user) {
        return (
          <><p>User is logged in.</p></>
        )
    } else {
      return <><p>User is not logged in.</p></>
    }
  }  

  return (
    <div>
      <UserAuthInfo />
      <button onClick={handleLoginSubmit}>Login</button>
      <button onClick={handleLogoutSubmit}>Logout</button>    
    </div>
  );  
}

export default UserProfile;
