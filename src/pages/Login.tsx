import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useAuth } from '../context/authContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      await login( email, password);
      alert('Login successful!');
    } catch (err) {
      setError('Login failed. Please check your credentials.')
      console.error(err);
    }
  }

  return (
    <div>
      <h2>
        Log in to personalize your cooking adventure!
      </h2>

      <form onSubmit={handleSubmit}>
        <Input 
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
        />
        <Button 
          label="Get started"
          type="submit"
        />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>   
  )
}
export default Login;