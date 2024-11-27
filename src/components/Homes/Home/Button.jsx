import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  return (
    <Link
      to="contact"
      smooth={true}
      offset={-50}
      className="cursor-pointer flex items-center gap-3 justify-center w-[172px] h-[40px] md:w-[220px] md:h-[48px] text-base md:text-lg lg:w-[286px] lg:h-[60px] lg:text-xl bg-white text-primary rounded-lg hover:bg-primary hover:text-white transition-all border-[1px] border-white font-heading font-medium"
    >
      {props.title}
      <FontAwesomeIcon
        icon={faArrowRight}
        className="w-[18px] lg:w-[24px] h-[18px] lg:h-[24px]"
      />
    </Link>
  );
}
export default Button;
