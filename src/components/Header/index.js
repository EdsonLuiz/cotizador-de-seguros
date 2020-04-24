import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
  const { titulo } = props;
  return (
    <header>
      <h1>{titulo}</h1>
    </header>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
