function Aicards(props) {
  return (
    <div className="text-center">
      <div className="text-font1 text-xl font-heading font-semibold">
        {props.title}
      </div>
      <p className="text-sm lg:text-base mt-5">{props.details}</p>
    </div>
  );
}
export default Aicards;
