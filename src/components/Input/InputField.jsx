function InputField(props) {
  return (
    <div>
      <label className="text-font2 text-sm font-semibold">{props.text}</label>
      <input
        type={props.types}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className="w-full h-[48px] bg-inputBg px-4 rounded-lg text-font2 text-sm focus:outline-none font-medium"
      />
    </div>
  );
}
export default InputField;
