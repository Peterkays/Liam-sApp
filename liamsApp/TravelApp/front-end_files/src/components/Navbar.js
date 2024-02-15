import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import SignupForm from "./SignUpForm";
import "./SignUpStyles.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false, formOpen: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleForm = () => {
    this.setState({ formOpen: !this.state.formOpen }); // This is where the toggleForm function is defined
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 classname="navbar-logo">Liam'sApp</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          <button onClick={this.toggleForm}>Sign Up</button>
        </ul>
        {this.state.formOpen && <SignupForm onClose={this.toggleForm} />}
      </nav>
    );
  }
}

export default Navbar;
