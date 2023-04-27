import React, { useState } from 'react'

const IndexPage: React.FC = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8000/login", { method: "GET", credentials: "include" });
    const data = await response.json();
    console.log(data);
  };

  const [message, setMessage] = useState<string>('')

  const handleClick = async () => {
    const res = await fetch('http://localhost:8000')
    const data = await res.json()
    setMessage(data.message)
  }

  return (
    <div>
      <button onClick={handleClick}>API CALL</button>
      <p>{message}</p>
          <div>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
    </div>
  )
}

export default IndexPage
