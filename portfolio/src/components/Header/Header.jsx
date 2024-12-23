import ClickableText from "../ClickableText/ClickableText";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-center">
        <ClickableText text="Home" active="1" href="/"></ClickableText>
        <ClickableText text="Experience" href="/#experience"></ClickableText>
        <ClickableText text="Book" href="/book"></ClickableText>
        {/*<ClickableText text="Contact" href="/contact"></ClickableText>
        <ClickableText text="Articles" href="/articles"></ClickableText>*/}
      </div>
    </div>
  );
}

export default Header;
