import ClickableText from "../ClickableText/ClickableText";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-center">
        <ClickableText text="Home" active="1"></ClickableText>
        <ClickableText text="Experience"></ClickableText>
        <ClickableText text="Contact"></ClickableText>
        <ClickableText text="Articles"></ClickableText>
      </div>
    </div>
  );
}

export default Header;
