import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";


const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>
        Register
      </h2>

      <form>
        <Input 
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
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
          label="Create account"
          onClick={()=> alert('Button clicked!')}
        />
      </form>
    </div>   
  )
}
export default Signup;