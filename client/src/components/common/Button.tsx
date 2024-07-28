import classNames from 'classnames';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  testId?: string;
  type?: 'submit' | 'button' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  testId,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      data-testid={testId}
      onClick={onClick}
      className={classNames(
        'bg-rose-400 p-2 rounded-lg hover:bg-rose-600 text-white transition-transform transform-gpu hover:scale-105 focus:outline-none',
        className
      )}
    >
      {children}
    </button>
  );
};
