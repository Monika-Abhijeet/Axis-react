import { Component } from "react";
import "./Footer.css";

// Functional component Footer
// function Footer() {
//   return <div className="footer-wrapper">Footer</div>;
// }

// class component Footer

class Footer extends Component {
  render() {
    return <div className="footer-wrapper">{this.props.title}</div>;
  }
}

export default Footer;
