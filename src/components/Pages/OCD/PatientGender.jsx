function PatientGender(props) {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <label className="text-[12px] text-[#777E90] font-bold uppercase">
        {props.label}
      </label>
      <select name="gender" className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none">
        <option>Select Patient Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="prefernottosay">Prefer Not to Say</option>
      </select>
    </div>
  );
}
export default PatientGender;
