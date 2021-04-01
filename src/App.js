import React from 'react';
import { useUser } from './contexts/UserContext';
import UserProfile from './components/UserProfile';


function App() {
  const { user } = useUser();

  return (
    user
    ?
    <div className="App">
      <p>Hello World!</p>
      <UserProfile />
    </div>
    :
    <UserProfile />
  );
}

export default App;
