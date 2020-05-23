import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

export const Header = (props) => {
  const { titulo } = props;
  return (
    <Container>
      <TextHeader>{titulo}</TextHeader>
    </Container>
  );
};

const Container = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: 900;
  color: #fff;
`

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
