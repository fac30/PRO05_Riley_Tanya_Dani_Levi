import Button from "../components/Button/Button";

export default function Home() {
    return (
      <div>
         <h2>Home Page</h2>
         <Button 
           label="Click me"
           onClick={()=> alert('Button clicked!')}
         />
      </div>
      
    )
  }