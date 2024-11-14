import './Button.css';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, type = 'button' }) => {
    return (
      <button type={type} onClick={onClick} disabled={disabled} className="button-class">
        {label}
      </button>
    );
  };
  
export default Button;