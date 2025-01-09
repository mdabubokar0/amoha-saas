function Header(props) {
  return (
    <div>
      <p className="text-base text-font2 font-semibold">{props.header}</p>
      <div className="w-full h-px bg-[#D9D9D9]" />
    </div>
  );
}
export default Header;
