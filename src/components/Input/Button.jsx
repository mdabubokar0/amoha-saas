function Button(props) {
  return (
    <button
      type="submit"
      className="w-full bg-primary text-white text-lg rounded-lg h-[48px] flex items-center justify-center font-semibold hover:bg-buttonHover transition-all"
    >
      {props.title}
    </button>
  );
}
export default Button;
