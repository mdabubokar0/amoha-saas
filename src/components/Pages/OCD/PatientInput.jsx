function PatientInput(props) {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <label className="text-[12px] text-[#777E90] font-bold uppercase">
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
      />
    </div>
  );
}
export default PatientInput;
