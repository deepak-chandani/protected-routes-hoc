import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "../redux/actions/authActions";

// The Header creates links that can be used to navigate
// between routes.
const Header = props => {
  const renderButton = () => {
    const { auth } = props;
    if (auth)
      return (
        <input
          type="button"
          value="Logout"
          onClick={() => {
            props.changeAuth(false);
          }}
        />
      );
    else
      return (
        <input
          type="button"
          value="Login"
          onClick={() => {
            props.changeAuth(true);
          }}
        />
      );
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>{renderButton()}</li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { changeAuth }
)(Header);
