import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [user,setUser] = React.useState(null);
React.useEffect(() => {
  axios.get('/api').then(Response => {
    setUser(Response.data);
  });
  
}, []);

  return user && (
    <div className="App">
      <header className="App-header">
        <img src={user.user.avatar_url} className="App-logo" alt="logo" />
        <p>
          {user.user.login}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
