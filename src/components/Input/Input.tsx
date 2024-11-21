import './Input.css'

interface InputProps {
    label: string;
    id?: string;
    name?: string;
    type?: 'text' | 'email' | 'password' | 'name' | 'number'; // Add other types as needed
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    autoComplete?: string;
    isTextarea?: boolean; // New prop to toggle textarea
    rows?: number;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
    isTextarea = false,
    rows = 3,
    onKeyDown,
  }) => {
    return (
      <div className="input-wrapper">
        <label  htmlFor={id} className="input-label">
          {label}
        </label>
        {isTextarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          required={required}
          className="input-textarea"
          rows={rows} // Apply the rows prop
          aria-describedby={id}
        />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            required={required}
            autoComplete={autoComplete}
            className="input-field"
            aria-describedby={id}
          />
        )}
      </div>
    );
  };
  
  export default Input;