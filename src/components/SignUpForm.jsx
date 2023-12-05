import { useState } from "react";

const SignUpForm = ({token,setToken}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
          username: userName, 
          password: password 
        }) 
      });
      const data = await response.json({setToken});
      setToken(data.token);
      console.log(data);
    }catch(error) {
      setError(error.message);
    }}


  return (
    <>
    <h2>Sign Up</h2>
      {error &&<p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>
        UserName 
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="username" />
      </label>
      <label>
        Password 
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
      </label>
      <button>Submit</button> 
    </form>
    </>
  )

}

export default SignUpForm;