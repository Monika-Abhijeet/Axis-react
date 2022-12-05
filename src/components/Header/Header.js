import "./Header.css";
function Header(props) {
  return (
    <div>
      <h1 className="header-wrapper">{props.title}</h1>
    </div>
  );
}

export default Header;
