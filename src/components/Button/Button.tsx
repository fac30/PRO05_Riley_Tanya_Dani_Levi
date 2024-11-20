import './Button.css';

interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
  }

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, type = 'button', className }) => {
    return (
      <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button-class ${className || ''}`}
        >
            {label}
        </button>
    );
  };
  
export default Button;