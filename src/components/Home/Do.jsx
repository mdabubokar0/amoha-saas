function Do(props) {
  return (
    <div className="w-full md:w-[450px] text-center">
      <img
        src={props.icon}
        alt="icon"
        className="w-16 m-auto h-16 mt-[30px] xl:mt-0 hover:scale-110 transition-all rounded-xl"
      />
      <div className="text-2xl text-font1 mt-8 font-heading font-semibold">
        {props.title}
      </div>
      <p className="text-font1 text-sm md:text-base font-medium mt-3">
        {props.detail}
      </p>
    </div>
  );
}
export default Do;
