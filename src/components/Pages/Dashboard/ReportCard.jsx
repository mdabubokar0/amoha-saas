function ReportCard(props) {
  return (
    <div
      className="flex-1 w-[280px] md:w-auto h-[120px] flex flex-col items-center py-5 text-[14px] font-medium rounded-[20px] bg-black"
      style={{ backgroundColor: props.color }}
    >
      <h4>{props.title}</h4>
      <h1 className="text-[40px] font-bold">{props.count}</h1>
    </div>
  );
}
export default ReportCard;
