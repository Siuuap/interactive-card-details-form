const Button = ({ buttonName, onClick }) => {
  return (
    <button
      className="bg-[#21092f] text-[hsl(0,0%,100%)] w-full p-4 rounded-lg"
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
