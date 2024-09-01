function RetinaScan(props) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-2 mt-4">
      <h1 className="text-[12px] text-[#777E90] font-bold uppercase">
        {props.label}
      </h1>
      <div className="w-full h-[100px] md:h-[150px] rounded-[8px] bg-[#F4F5F6]"></div>
      <label
        htmlFor={props.for}
        className="text-[12px] font-bold uppercase inline-block bg-[#3174C4] cursor-pointer w-full h-[48px] place-content-center text-center text-white rounded-[8px]"
      >
        {props.btn}
      </label>

      <input
        id={props.id}
        type="file"
        accept="image/*"
        className="w-full h-[150px] rounded-[8px]"
      />
    </div>
  );
}
export default RetinaScan;
