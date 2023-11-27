import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000')
      .then(response => {
        setMessage(response.data);
      })
  }, []);

  const handleClick = () => {
    axios.get('http://localhost:4000/api/buttonclick')
      .then(response => {
        setMessage(`Button has been clicked ${response.data.count} times`);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
      </header>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;