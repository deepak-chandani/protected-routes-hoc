import React from "react";
import { connect } from "react-redux";

const requireAuth = ChildComponent => {
  class EnhancedComponent extends React.Component {
    componentDidMount() {
      this.shouldNavigate();
    }

    shouldNavigate() {
      const { auth, history } = this.props;
      //console.log(this.props);
      if (!auth) {
        return history.push("/");
      }
    }

    componentDidUpdate() {
      this.shouldNavigate();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth };
  };
  return connect(mapStateToProps)(EnhancedComponent);
};

export default requireAuth;

/**
 *  requireAuth(CommentForm)
 */
