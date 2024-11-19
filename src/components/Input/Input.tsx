import './Input.css'

interface InputProps {
    label: string;
    id?: string;
    name?: string;
    type?: 'text' | 'email' | 'password' | 'name'; // Add other types as needed
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    autoComplete?: string;
  }

  const Input: React.FC<InputProps> = ({
    label,
    id = 'input',
    name = 'input',
    type = 'text',
    placeholder = '',
    value,
    onChange,
    required = false,
    autoComplete = 'on',
  }) => {
    return (
      <div className="input-wrapper">
        <label  htmlFor={id} className="input-label">
          {label}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          className="input-field"
          aria-describedby={id}
        />
      </div>
    );
  };
  
  export default Input;