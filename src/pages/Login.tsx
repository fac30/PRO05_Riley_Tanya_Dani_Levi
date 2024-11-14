import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>
        Log in to personalize your cooking adventure!
      </h2>

      <form>
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
          onClick={()=> alert('Button clicked!')}
        />
      </form>
    </div>   
  )
}
export default Login;