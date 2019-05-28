import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location: { hash }, children }) => {
  useEffect(() => {
  const element = document.getElementById(hash.replace("#", ""));

  setTimeout(() => {
    window.scrollTo({
     behavior: element ? "smooth" : "auto",
     top: element ? element.offsetTop : 0
    });
  }, 100);
  }, [hash]);

  return children;
};

ScrollHandler.propTypes = {
  children: PropTypes.node.isRequired,
  hash: PropTypes.string
};

export default withRouter(ScrollHandler);
