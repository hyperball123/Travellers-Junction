
function Button  ({ size, children,customStyle  }) {
  // Define Tailwind CSS classes based on the size
  let sizeClasses = '';
  switch (size) {
    case 'small':
      sizeClasses = 'text-xs px-2.5 py-1 uppercase font-semibold text-center';
      break;
    case 'medium':
      sizeClasses = 'text-sm px-4 py-3 font-medium';
      break;
    case 'large':
      sizeClasses = 'text-xl px-6 py-4 font-medium';
      break;
    default:
      sizeClasses = 'text-sm px-4 py-3 font-medium';
  }

  return (
    <button
      className={`bg-lime-500 text-white rounded-md hover:bg-lime-600 focus:outline-none focus:ring focus:border-lime-700 ${sizeClasses} transition-all duration-300`}
      style={customStyle}
    >
      {children}
    </button>
  );
};

export default Button;
