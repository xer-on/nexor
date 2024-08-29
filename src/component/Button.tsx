"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  textDecoration: "none", // Remove underline from <a> tag
  display: "inline-block",
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
