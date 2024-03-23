import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  let text = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (username === "user" && password === "password")
      text.current = "Welcome, user!";
    else text.current = "Invalid username or password";
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {isSubmit ? (
        <p>{text.current}</p>
      ) : (
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
