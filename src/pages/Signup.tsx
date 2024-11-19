import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useAuth } from "../context/authContext";
import './Form.css';


const Signup: React.FC = () => {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await signup(name, email, password);
      alert('Signup successful!')
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error(err);
    }
  }

  return (
    <div className="form-container">
      <h1>
        Sign up on our website
      </h1>

      <form onSubmit={handleSubmit}>
        <Input 
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-describedby="name"
        />
        <Input 
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-describedby="email"
        />
        <Input 
          label="Password"
          id="password"
          name="password"
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-describedby="password"
        />
        <Button 
          label="Create account"
          type="submit"
        />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>   
  )
}
export default Signup;