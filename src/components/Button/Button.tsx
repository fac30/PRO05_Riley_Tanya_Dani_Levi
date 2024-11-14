import './Button.css';

interface ButtonProps {
    label: string;
    type?: 'button' | 'submit' | 'reset';
  }

const Button: React.FC<ButtonProps> = ({ label, type = 'button' }) => {
    return (
      <button type={type} className="button-class">
        {label}
      </button>
    );
  };
  
export default Button;