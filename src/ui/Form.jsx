
function Form({ children, type }) {
  let className = "p-6 bg-gray-100 border border-gray-200 rounded-md ";

  if (type === "modal") {
    className = "p-6 bg-gray-100 border border-gray-200 rounded-md w-96"; // Adjust width for modal type
  }

  return (
    <form className={className}>
      {children}
    </form>
  );
}

Form.defaultProps = {
  type: "regular",
};

export default Form;
